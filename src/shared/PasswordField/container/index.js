import React, { Component } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { observer } from 'mobx-react';
import { View } from 'native-base';

import ErrorMessage from '../components/ErrorMessage';
import Placeholder from '../components/Placeholder';
import Input from '../components/Input';
import RevealButton from '../components/RevealButton';


@observer
class PasswordField extends Component {

  state = {
    hidePassword: true
  }

  togglePassword = () => this.setState({ hidePassword: !this.state.hidePassword });

  componentWillMount() {
    const { form, field } = this.props;
    this.isFocused = new Animated.Value(form.form[field] ? 1 : 0);
  }

  onFocus = () => {
    Animated.timing(this.isFocused, {
      toValue: 1,
      duration: 100,
    }).start();
    
  }

  onBlur = () => {
    const { form, field } = this.props;
    if (!form.form[field]) {
      Animated.timing(this.isFocused, {
        toValue: 0,
        duration: 100,
      }).start();
    }
  }

  

  render() {

    const { form, placeholder, field } = this.props;
    const { fieldStyle } = styles;
    const { hidePassword } = this.state;

    const error = form.errors[field];

    const labelStyle = {
      position: 'absolute',
      fontFamily: 'OpenSans-Bold',
      left: 13,
      top: this.isFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [7, -22],
      }),
      fontSize: this.isFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 12],
      }),
      color: this.isFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#7f8c8d', '#000'],
      }),
    };

    return (
      <View style={{ marginVertical: 10, paddingTop: 0 }}>
        <View style={fieldStyle}>
          <Placeholder placeholder={placeholder} labelStyle={labelStyle} />
          <Input 
            form={form}
            field={field}
            hidePassword={hidePassword}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
          />
          <RevealButton
            hidePassword={hidePassword}
            togglePassword={this.togglePassword}
          />
        </View>
        { error && <ErrorMessage error={error}/> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fieldStyle: {
    paddingTop: 0,
    borderColor: '#2d3436', 
    borderWidth: 2,
    height: 42,
    flexDirection: 'row',
    borderRadius: 5
  }
});

export default PasswordField;
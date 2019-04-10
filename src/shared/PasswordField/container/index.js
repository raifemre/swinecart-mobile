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
    this.isFocused = new Animated.Value(form.data[field] ? 1 : 0);
  }

  componentWillUpdate(nextProps) {

    const nextValue = nextProps.form.data[nextProps.field];

    if (!nextValue) {
      this.animate(0);
    }
    else {
      const currValue = this.props.form.data[this.props.field];
      if (currValue.length === 1) {
        this.animate(1);
      }
    }
  };
  

  animate = toValue => {
    Animated.timing(this.isFocused, {
      toValue,
      duration: 200,
    }).start();
  }

  onFocus = () => {
    this.animate(1);
  }

  onBlur = () => {
    const { form, field } = this.props;
    if (!form.data[field]) {
      this.animate(0);
    }
  }

  render() {

    const { form, placeholder, field } = this.props;
    const { fieldStyle } = styles;
    const { hidePassword } = this.state;

    const error = form.errors[field];
    const borderColor = error ? '#e74c3c' : '#2d3436';

    const labelStyle = {
      position: 'absolute',
      fontFamily: 'OpenSans-Bold',
      left: 10,
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
        outputRange: ['#7f8c8d', '#000000'],
      }),
    };

    return (
      <View style={{ marginVertical: 10, paddingTop: 0 }}>
        <View style={[fieldStyle, { borderColor }]}>
          <Placeholder placeholder={placeholder} labelStyle={labelStyle} />
          <Input 
            form={form}
            field={field}
            value={form.data[field]}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            hidePassword={hidePassword}
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
    borderWidth: 1.5,
    height: 42,
    flexDirection: 'row',
    borderRadius: 5
  }
});

export default PasswordField;
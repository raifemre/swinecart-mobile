import React, { Component } from 'react';
import { StyleSheet, TextInput, Animated } from 'react-native';
import { observer } from 'mobx-react';
import { View, Button } from 'native-base';

import ErrorMessage from '../components/ErrorMessage';

import IconButton from '../../IconButton';
import Placeholder from '../components/Placeholder';

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

  handleFocus = () => {
    Animated.timing(this.isFocused, {
      toValue: 1,
      duration: 100,
    }).start();
    
  }
  handleBlur = () => {
    const { form, field } = this.props;
    if (!form.form[field]) {
      Animated.timing(this.isFocused, {
        toValue: 0,
        duration: 100,
      }).start();
    }
  };

  onChangeText = value => {
    const { form, field } = this.props;
    form.setValue(field, value);
  }


  render() {

    const { form, placeholder, field } = this.props;
    const { inputStyle, containerStyle } = styles;
    const { hidePassword } = this.state;

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
      <View style={{ marginVertical: 10 }}>
        <View style={containerStyle}>
          <Placeholder placeholder={placeholder} labelStyle={labelStyle} />
          <TextInput
            onChangeText={this.onChangeText}
            selectionColor='#000000'
            underlineColorAndroid='transparent'
            style={inputStyle}
            value={form.form[field]}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            secureTextEntry={hidePassword}
          />
          <View style={{ justifyContent: 'center' }}>
            <IconButton
              marginLeft={10}
              marginRight={0}
              size={24}
              name={hidePassword ? 'eye' : 'eye-off'}
              type='MaterialCommunityIcons'
              onPress={this.togglePassword}
            />
          </View>
        </View>
        { form.errors[field] && <ErrorMessage error={form.errors[field]}/> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 0, borderColor: '#2d3436', borderWidth: 2, height: 40,
    flexDirection: 'row', borderRadius: 5,
    paddingLeft: 8, paddingRight: 10,
  },
  inputStyle: {
    height: 38, fontSize: 16, fontFamily: 'OpenSans-Bold',
    paddingVertical: 0, flex: 1,
  }
});

export default PasswordField;
import React, { Component } from 'react';
import { StyleSheet, TextInput, Animated } from 'react-native';
import { observer } from 'mobx-react';
import { View, Button } from 'native-base';

import IconWrapper from '../../../shared/IconWrapper';
@observer
class InputField extends Component {

  state = {
    isFocused: false,
    hidePassword: true
  }

  togglePassword = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
    }).start();
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  render() {

    const { label, ...props } = this.props;
    const { inputStyle, containerStyle } = styles;

    const labelStyle = {
      position: 'absolute',
      left: 10,
      fontFamily: 'OpenSans-Bold',
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [5, -22],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#7f8c8d', '#000'],
      }),
    };
    return (
      <View style={containerStyle}>
        <Animated.Text style={labelStyle}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          selectionColor='#000000'
          style={inputStyle}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          secureTextEntry={true}
        />
        <Button transparent onPress={this.togglePassword} style={{ height: 42 }}>
          <IconWrapper style={{ color: '#000000', lineHeight: 20 }} name={!this.state.hidePassword ? 'eye' : 'eye-off'} type='MaterialCommunityIcons' />
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 0, borderColor: '#00695C', borderWidth: 2, height: 40,
    flexDirection: 'row', marginVertical: 10, borderRadius: 20,
    paddingHorizontal: 10
  },
  inputStyle: {
    height: 40, fontSize: 18, fontFamily: 'OpenSans-Bold',
    paddingVertical: 0, flex: 1, borderColor: 'red', borderWidth: 2
  }
});

export default InputField;
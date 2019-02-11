import React, { Component } from 'react';
import { StyleSheet, TextInput, Animated } from 'react-native';
import { observer } from 'mobx-react';
import { View, Button } from 'native-base';

import IconWrapper from '../../../shared/IconWrapper';

@observer
class PasswordField extends Component {

  state = {
    isFocused: false,
    hidePassword: true
  }

  togglePassword = () => this.setState({ hidePassword: !this.state.hidePassword });

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
      left: 10,
      fontFamily: 'OpenSans-Bold',
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [7, -22],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 12],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#7f8c8d', '#000'],
      }),
    };

    return (
      <View style={containerStyle}>
        <Animated.Text style={labelStyle}>
          {placeholder}
        </Animated.Text>
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
        <Button transparent style={{ height: 38, paddingHorizontal: 0 }} onPress={this.togglePassword}>
          <IconWrapper
            type='MaterialCommunityIcons'
            size={25}
            name={hidePassword? 'eye' : 'eye-off'}
          />
        </Button>
      </View>
    );
  } add
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 0, borderColor: '#00695C', borderWidth: 2, height: 40,
    flexDirection: 'row', marginVertical: 10, borderRadius: 20,
    paddingHorizontal: 10
  },
  inputStyle: {
    height: 38, fontSize: 16, fontFamily: 'OpenSans-Bold',
    paddingVertical: 0, flex: 1,
  }
});

export default PasswordField;
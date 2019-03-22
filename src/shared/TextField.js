import React, { Component } from 'react';
import { StyleSheet, TextInput, Animated } from 'react-native';
import { observer } from 'mobx-react';
import { View } from 'native-base';

import TextWrapper from './TextWrapper';

@observer
class TextField extends Component {

  state = {
    isFocused: false,
  }

  componentWillMount() {
    const { form, field } = this.props;
    this._animatedIsFocused = new Animated.Value(form.form[field] === '' ? 0 : 1);
  }

  componentDidUpdate() {
    const { form, field } = this.props;
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || form.form[field] !== '') ? 1 : 0,
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

    const {
      form, placeholder, field, editable
    } = this.props;

    const { inputStyle, containerStyle } = styles;

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
        outputRange: [16, 13],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#7f8c8d', '#000'],
      }),
    };

    return (
      <View style={{ marginVertical: 10 }}>
        <View style={[{ borderColor: editable ? '#2d3436' : '#95a5a6' }, containerStyle]}>
          <Animated.Text style={labelStyle}>
            {placeholder}
          </Animated.Text>
          <TextInput
            onChangeText={this.onChangeText}
            selectionColor='#2d3436'
            value={form.form[field]}
            underlineColorAndroid='transparent'
            style={inputStyle}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            editable={editable}
          />
        </View>
        {
          form.errors[field] !== ''
            &&
          <View style={{ paddingLeft: 10 }}>
            <TextWrapper text={form.errors[field]} size={13} color='#db222a' />
          </View> 
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 0, borderWidth: 2, height: 40,
    flexDirection: 'row', borderRadius: 5,
    paddingHorizontal: 10
  },
  inputStyle: {
    height: 38, fontSize: 16, fontFamily: 'OpenSans-Bold',
    paddingVertical: 0, flex: 1,
  }
});

export default TextField;
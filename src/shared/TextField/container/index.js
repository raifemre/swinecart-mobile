import React, { Component } from 'react';
import { StyleSheet, TextInput, Animated } from 'react-native';
import { observer } from 'mobx-react';
import { View } from 'native-base';

import ErrorMessage from '../components/ErrorMessage';
import Placeholder from '../components/Placeholder';
import Input from '../components/Input';

@observer
class TextField extends Component {

  componentWillMount() {
    const { form, field } = this.props;
    this.isFocused = new Animated.Value(form.form[field] ? 1 : 0);
  }

  onFocus = () => {
    Animated.timing(this.isFocused, {
      toValue: 1,
      duration: 500,
    }).start();

  }

  onBlur = () => {
    const { form, field } = this.props;
    if (!form.form[field]) {
      Animated.timing(this.isFocused, {
        toValue: 0,
        duration: 500,
      }).start();
    }
  }

  render() {

    const { form, placeholder, field, keyboardType } = this.props;
    const { fieldStyle } = styles;

    const error = form.errors[field];
    const borderColor = error ? '#e74c3c' : '#2d3436';

    const labelStyle = {
      position: 'absolute',
      left: 10,
      fontFamily: 'OpenSans-Bold',
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
        <View style={[fieldStyle, { borderColor }]}>
          <Placeholder placeholder={placeholder} labelStyle={labelStyle} />
          <Input
            form={form}
            field={field}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            keyboardType={keyboardType}
          />
        </View>
        { error && <ErrorMessage error={error} /> }
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

export default TextField;
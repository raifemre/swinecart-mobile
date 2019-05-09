import React from 'react';
import { StyleSheet, TextInput, Dimensions } from 'react-native';
import { observer } from 'mobx-react';

const { width } = Dimensions.get('window');

function Input(props) {

  const { value, onBlur, onFocus, keyboardType } = props;


  const onChangeText = value => {
    const { form, field } = this.props;
    form.setValue(field, value === '' ? null : value);
  }

  return (
    <TextInput
      onChangeText={onChangeText}
      selectionColor='#2E384D'
      underlineColorAndroid='transparent'
      style={styles.inputStyle}
      value={value}
      onFocus={onFocus}
      onBlur={onBlur}
      keyboardType={keyboardType}
    />
  );

}

const styles = StyleSheet.create({
  inputStyle: {
    height: 45,
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
    paddingVertical: 0,
    paddingLeft: 10,
    width: width - 42
  }
});

export default observer(Input);
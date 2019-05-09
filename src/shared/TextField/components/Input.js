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
      selectionColor='#000000'
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
    height: 38,
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    paddingVertical: 0,
    paddingLeft: 10,
    width: width - 42
  }
});

export default observer(Input);
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { observer } from 'mobx-react';

function Input(props) {

  const { form, field, onBlur, onFocus, keyboardType } = props;

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
      value={form.data[field]}
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
    flex: 1,
  }
});

export default observer(Input);
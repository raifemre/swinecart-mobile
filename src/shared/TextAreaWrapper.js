import React from 'react';
import { observer } from 'mobx-react'
import Textarea from 'react-native-textarea';

function TextAreaWrapper(props) {

  const onChangeText = value => {
    const { form, field } = this.props;
    form.setValue(field, value === '' ? null : value);
  }

  const {
    form, placeholder, field
  } = props;

  return (
    <Textarea
      containerStyle={{ borderColor: '#2d3436', borderWidth: 2, borderRadius: 5, padding: 0 }}
      style={{ fontFamily: 'OpenSans-Bold', fontSize: 16, }}
      onChangeText={onChangeText}
      defaultText={form.form[field]}
      placeholder={placeholder}
      underlineColorAndroid={'transparent'}
      placeholderTextColor={'#c7c7c7'}
      maxLength={500}
    />
  )
}

export default observer(TextAreaWrapper);
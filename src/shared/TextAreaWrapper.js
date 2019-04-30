import React from 'react';
import { observer } from 'mobx-react'
import Textarea from 'react-native-textarea';

function TextAreaWrapper(props) {

  const onChangeText = value => {
    const { form, field } = this.props;
    form.setValue(field, value);
  }

  const {
    form, placeholder, field
  } = props;

  return (
    <Textarea
      containerStyle={{ borderColor: '#2d3436', borderWidth: 1, borderRadius: 5, padding: 0, height: 200 }}
      style={{ fontFamily: 'OpenSans-Bold', fontSize: 16, textAlignVertical: 'top', height: 200 }}
      onChangeText={onChangeText}
      defaultValue={form.data[field]}
      placeholder={placeholder}
      underlineColorAndroid={'transparent'}
      placeholderTextColor={'#c7c7c7'}
    />
  )
}

export default observer(TextAreaWrapper);
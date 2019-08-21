import React, { memo, useCallBack } from 'react';
import { TextInput as Input } from 'react-native';
import {
  withStyles
} from 'react-native-ui-kitten/theme';
import { textStyles } from '../../../../constants/theme';


function TextInput({ themedStyle, value, name, onChange, ...restProps }) {

  const onChangeText = val => {
    onChange(name, val);
  };

  return (
    <Input
      onChangeText={onChangeText}
      selectionColor='#000000'
      autoCapitalize='none'
      underlineColorAndroid='transparent'
      style={themedStyle.inputStyle}
      value={value}
      {...restProps}
    />
  );
}

export default withStyles(memo(TextInput), () => ({
  inputStyle: {
    ...textStyles.paragraph,
    fontSize: 16,
    lineHeight: 19.2,
    height: 40,
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  }
}));
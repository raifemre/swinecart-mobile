import React from 'react';
import { Input as TextInput } from 'react-native-ui-kitten';

import { textStyles } from '../../constants/theme';

function Input(props) {

  const { ...restProps } = props;

  return (
    <TextInput
      textStyles={textStyles.paragraph}
      autoCapitalize='none'
      size='small'
    />
  )

}

export default Input;
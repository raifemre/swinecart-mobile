import React from 'react';
import { Input as TextInput } from 'react-native-ui-kitten';
import {
  withStyles
} from 'react-native-ui-kitten/theme';

import { textStyles } from '../../constants/theme';

function Input(props) {

  const { label, caption, status, ...restProps } = props;

  return (
    <TextInput
      status={status}
      textStyle={[textStyles.paragraph]}
      autoCapitalize='none'
      size='small'
      label={label}
      labelStyle={textStyles.label}
      caption={caption}
      captionTextStyle={textStyles.caption1}
      {...restProps}
    />
  )

}

export default withStyles(Input, () => ({
}));
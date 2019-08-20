import React from 'react';
import { Input as TextInput } from 'react-native-ui-kitten';
import {
  withStyles
} from 'react-native-ui-kitten/theme';

import { textStyles } from '../../constants/theme';

function Input({ themedStyle, label, error, ...restProps}) {
  return (
    <TextInput
      status={error ? 'danger' : 'primary'}
      textStyle={themedStyle.text}
      autoCapitalize='none'
      size='small'
      label={label}
      labelStyle={themedStyle.label}
      caption={error || ''}
      captionTextStyle={themedStyle.caption}
      {...restProps}
    />
  )

}

export default withStyles(Input, () => ({
  text: {
    ...textStyles.paragraph,
    fontSize: 16,
  },
  label: {
    ...textStyles.label
  },
  caption: {
    ...textStyles.paragraph,
  }
}));
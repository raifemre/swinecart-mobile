import React, { memo } from 'react';
import { Text } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';
import Block from '../Block';
import { textStyles, colors, sizes } from '../../../constants/theme';

import { 
  TextInput, Label, ErrorMessage
} from './components';


function Input({ themedStyle, onChange, name, values, error, label, ...restProps }) {
  return (
    <Block flex={'disabled'} style={themedStyle.container}>
      <Label text={label} />
      <Block flex={'disabled'} middle style={themedStyle.textInputContainer}>
        <TextInput
          value={values[name]}
          name={name}
          onChange={onChange}
          {...restProps}
        />
      </Block>
      {/* {error && <ErrorMessage text={label} /> } */}
    </Block>
  );
}

export default withStyles(memo(Input), () => ({
  container: {
    marginVertical: sizes.margin / 2
  },
  label: {
    ...textStyles.caption2
  },
  textInputContainer: {
    backgroundColor: colors.gray2,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 5,
    minHeight: 56,
    paddingHorizontal: sizes.padding / 2,
  },
}));
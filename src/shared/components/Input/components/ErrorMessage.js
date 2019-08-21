import React, { memo } from 'react';
import { Text } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';
import Block from '../../Block';
import { textStyles, colors } from '../../../../constants/theme';

function ErrorMessage({ themedStyle, text }) {
  return (
    <Block flex={'disabled'}>
      <Text style={themedStyle.label}>{text}</Text>
    </Block>
  );
}

export default withStyles(memo(ErrorMessage, () => true), () => ({
  label: {
    ...textStyles.caption2,
    color: colors.danger,
    fontSize: 14,
  },
}));
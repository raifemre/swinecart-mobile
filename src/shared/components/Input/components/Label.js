import React, { memo } from 'react';
import { Text } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';
import Block from '../../Block';
import { textStyles, colors } from '../../../../constants/theme';

import { uppercaseWord } from '../../../../utils/formatters'

function Label({ themedStyle, text }) {
  return (
    <Block flex={'disabled'}>
      <Text style={themedStyle.label}>{uppercaseWord(text)}</Text>
    </Block>
  );
}

export default withStyles(memo(Label, () => true), () => ({
  label: {
    ...textStyles.label,
    color: colors.gray5,
    fontSize: 14,
  },
}));
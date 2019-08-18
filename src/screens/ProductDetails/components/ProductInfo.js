import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';
import { sizes, textStyles, colors } from '../../../constants/theme';

import { Block } from '../../../shared/components';

function ProductInfo({ themedStyle }) {
  return (
    <Block flex='disabled' marginBottom>
      <Text style={themedStyle.nameStyle}>9901</Text>
      <Text style={themedStyle.typeStyle}>Sow - Landrace</Text>
      <Text style={themedStyle.birthDateStyle}>105 days old (Birth date is on April 24, 2019)</Text>
    </Block>
  );
}

export default withStyles(memo(ProductInfo, () => true), () => ({
  nameStyle: {
    ...textStyles.headline,
    fontSize: 30,
    lineHeight: 36
  },
  typeStyle: {
    ...textStyles.subtitle,
    fontSize: 20,
    lineHeight: 24,
    color: colors.gray5
  },
  birthDateStyle: {
    ...textStyles.caption1,
    fontSize: 14,
    lineHeight: 16.8,
    color: colors.gray5
  },
}));
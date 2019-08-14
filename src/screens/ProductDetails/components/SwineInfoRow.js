import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';

import { sizes, textStyles, colors } from '../../../constants/theme';

import {
  Block
} from '../../../shared/components';

function SwineInfoRow({ themedStyle, label, data }) {

  return (
    <Block flex={1} row style={themedStyle.container}>
      <Text style={themedStyle.swineInfoLabel}>{label}: </Text>
      <Text style={themedStyle.swineInfoData}>
        {
          data || 'Not Indicated' 
        }
      </Text>
    </Block>
  );
}


export default withStyles(memo(SwineInfoRow, () => true), () => ({
  container: {
    marginBottom: sizes.margin / 2
  },
  swineInfoLabel: {
    ...textStyles.caption2,
    fontSize: 16,
    lineHeight: 19.2,
    color: colors.gray5
  },
  swineInfoData: {
    ...textStyles.caption2,
    fontSize: 16,
    lineHeight: 19.2,
    color: '#000000'
  },
}));
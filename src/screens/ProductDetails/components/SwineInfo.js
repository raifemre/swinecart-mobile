import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';

import { sizes, textStyles, colors } from '../../../constants/theme';

import {
  Block
} from '../../../shared/components';

import SwineInfoRow from './SwineInfoRow';

function SwineInfo({ themedStyle }) {

  return (
    <Block flex='disabled' marginBottom marginTop>
      <Text style={themedStyle.header}>Swine Information</Text>
      <SwineInfoRow label={'Average Daily Gain'} data={'799 g'} />
      <SwineInfoRow label={'Feed Conversion Ratio'} data={'2.7 g'} />
      <SwineInfoRow label={'Backfat Thickness'} data={'17.6 mm'} />
      <SwineInfoRow label={'Litter Size (Born Alive)'} data={'14'} />
      <SwineInfoRow label={'Birth Weight'} data={'2196 g'} />
      <SwineInfoRow label={'Number of teats'} data={'Left: 7 Right: 6'} />
      <SwineInfoRow label={'House Type'} data={'Tunnel Ventilated'} />
    </Block>
  );
}


export default withStyles(memo(SwineInfo, () => true), () => ({
  header: {
    ...textStyles.headline,
    fontSize: 20,
    lineHeight: 24,
    color: colors.primary,
    marginBottom: sizes.margin / 2,
  },
}));
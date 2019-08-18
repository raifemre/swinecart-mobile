import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';

import { sizes, textStyles, colors } from '../../../constants/theme';

import {
  Block
} from '../../../shared/components';

import SwineInfoRow from './SwineInfoRow';

import { capitalizeWords } from '../../../utils/formatters';

function SwineInfo({ themedStyle, swineInfo }) {
  const {
    adg, fcr, bft, lsba, birthWeight, leftTeats, rightTeats,
    houseType
  } = swineInfo;
  return (
    <Block flex='disabled' marginBottom marginTop>
      <Text style={themedStyle.header}>Swine Information</Text>
      <SwineInfoRow label={'Average Daily Gain'} data={`${adg} g`} />
      <SwineInfoRow label={'Feed Conversion Ratio'} data={`${fcr} g`} />
      <SwineInfoRow label={'Backfat Thickness'} data={`${bft} mm`} />
      <SwineInfoRow label={'Litter Size (Born Alive)'} data={`${lsba}`} />
      <SwineInfoRow label={'Birth Weight'} data={`${birthWeight} g`} />
      <SwineInfoRow label={'Left Teats'} data={`${rightTeats}`}/>
      <SwineInfoRow label={'Right Teats'} data={`${rightTeats}`} />
      <SwineInfoRow label={'House Type'} data={`${capitalizeWords(houseType)}`} />
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
  swineInfoLabel: {
    ...textStyles.caption2,
    fontSize: 16,
    lineHeight: 19.2,
    color: colors.gray5
  },
}));
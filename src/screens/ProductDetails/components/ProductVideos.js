import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';

import { sizes, textStyles, colors } from '../../../constants/theme';

import {
  Block
} from '../../../shared/components';

import { createFakeOtherDetails } from '../../../utils/mockdata';

function ProductVideos({ themedStyle }) {

  const otherDetails = createFakeOtherDetails();

  return (
    <Block flex='disabled' marginBottom marginTop>
      <Text style={themedStyle.header}>Videos</Text>
      <Block flex='disabled'>
      </Block>
    </Block>
  );
}


export default withStyles(memo(ProductVideos, () => true), () => ({
  header: {
    ...textStyles.headline,
    fontSize: 20,
    lineHeight: 24,
    color: colors.primary,
    marginBottom: sizes.margin / 2,
  },
  content: {
    ...textStyles.caption,
    fontSize: 16,
    lineHeight: 19.2,
  }
}));
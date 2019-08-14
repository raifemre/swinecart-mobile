import React, { memo } from 'react';
import { Image } from 'react-native';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';
import { sizes, textStyles, colors } from '../../../constants/theme';
import { urls } from '../../../constants/randomImage';

import {
  Block
} from '../../../shared/components';

import SwineInfo from './SwineInfo';
import OtherInfo from './OtherInfo';
import ProductImages from './ProductImages';
import ProductVideos from './ProductVideos';

function Product({ themedStyle }) {

  return (
    <Block flex={1} style={themedStyle.bodyStyle}>
      <Block row flex='disabled' style={themedStyle.imageContainerStyle}>
        <Image
          style={themedStyle.imageStyle}
          source={{ uri: urls[0] }}
          resizeMode='cover'
        />
      </Block>
      <Block flex={1} padding style={themedStyle.bodyStyle}>
        <Block flex='disabled' marginBottom>
          <Text style={themedStyle.nameStyle}>9901</Text>
          <Text style={themedStyle.typeStyle}>Sow - Landrace</Text>
          <Text style={themedStyle.birthDateStyle}>105 days old (Birth date is on April 24, 2019)</Text>
        </Block>
        <SwineInfo />
        <OtherInfo />
        <ProductImages />
        <ProductVideos />
      </Block>
    </Block>
  );
}


export default withStyles(memo(Product, () => true), () => ({
  modalStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0
  },
  bodyStyle: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  buttonStyle: {
    borderWidth: 0,
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: 270,
  },
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
  swineInfoHeader: {
    ...textStyles.headline,
    fontSize: 20,
    lineHeight: 24,
    color: colors.primary,
    marginBottom: sizes.margin / 2,
  },
  imageContainerStyle: {
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
    width: '100%',
    height: 270,
    backgroundColor: colors.gray2,
    marginBottom: sizes.margin,
  },
}));
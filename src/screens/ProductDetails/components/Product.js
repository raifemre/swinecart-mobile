import React, { Fragment, memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { urls } from '../../../constants/randomImage';

import {
  Block, ContainerView, LoadingPlaceholder
} from '../../../shared/components';

import ProductInfo from './ProductInfo';
import SwineInfo from './SwineInfo';
import OtherInfo from './OtherInfo';
import ProductImages from './ProductImages';
import ProductVideos from './ProductVideos';
import ProductPrimaryImage from './ProductPrimaryImage';

function Product({ themedStyle, productDetails }) {
  return (
    <LoadingPlaceholder data={productDetails}>
      {() => (
        <ContainerView flex={1}>
          <ProductPrimaryImage photoURL={productDetails.primaryPhotoURL} />
          <Block flex={1} padding style={themedStyle.bodyStyle}>
            <ProductInfo />
            <SwineInfo />
            <OtherInfo />
            <ProductImages />
            <ProductVideos />
          </Block>
        </ContainerView>
      )}
    </LoadingPlaceholder>
  );
}

export default withStyles(memo(Product), () => ({
  bodyStyle: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
}));
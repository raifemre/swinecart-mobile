import React, { Fragment, memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';

import {
  Block, ContainerView, LoadingView
} from '../../../shared/components';

import ProductInfo from './ProductInfo';
import SwineInfo from './SwineInfo';
import OtherInfo from './OtherInfo';
import ProductImages from './ProductImages';
import ProductVideos from './ProductVideos';
import ProductPrimaryImage from './ProductPrimaryImage';

function Product({ themedStyle, productDetails }) {
  return (
    <Fragment>
      {
        productDetails && <ContainerView flex={1}>
          <ProductPrimaryImage photoURL={productDetails.img_path} />
          <Block flex={1} padding style={themedStyle.bodyStyle}>
            <ProductInfo productInfo={productDetails} />
            <SwineInfo swineInfo={productDetails} />
            {/* <OtherInfo otherInfo={productDetails} />
            <ProductImages productImages={productDetails.productImages} />
            <ProductVideos productVideos={productDetails.productVideos} /> */}
          </Block>
        </ContainerView>
      }
      { !productDetails && <LoadingView/> }
    </Fragment>
  );
}

export default withStyles(memo(Product), () => ({
  bodyStyle: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
}));
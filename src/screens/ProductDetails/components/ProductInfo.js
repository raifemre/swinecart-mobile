import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { View } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';
import LoadingView from '../../../shared/LoadingView';

import ProductImages from './ProductImages';

@inject('ShopStore')
@observer
class ProductInfo extends Component {


  render() {

    const { ShopStore } = this.props;

    if (ShopStore.product) {
      return (
        <ProductImages />
      );
    }
    else {
      return (
        <LoadingView />
      );
    }

    
  }

}

export default ProductInfo;
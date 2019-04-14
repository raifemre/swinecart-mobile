import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import { View } from 'native-base';
import ImageCarousel from 'react-native-image-carousel';

import TextWrapper from '../../../shared/TextWrapper';
import LoadingView from '../../../shared/LoadingView';

import { formatMedia } from '../../../utils';

const urls = [
  {
    "id": 63,
    "link": "http://swinecart.test/images/product/large/semen_duroc1.jpg"
  },
  {
    "id": 72,
    "link": "http://swinecart.test/images/product/large/56_Semen_Duroc_20V8BwRAZ6GGU.jpg"
  },
  {
    "id": 73,
    "link": "http://swinecart.test/images/product/large/56_Semen_Duroc_20V8BwRAZ6GGU.jpg"
  },
  {
    "id": 74,
    "link": "http://swinecart.test/images/product/large/56_Semen_Duroc_20N4p4L56iB3s.jpg"
  }
];

@inject('ShopStore')
@observer
class ProductImages extends Component {


  renderImage = idx => (
    <Image
      style={StyleSheet.absoluteFill}
      resizeMode='contain'
      source={{ uri: urls[idx].link }}
    />
  );

  render() {

    const { ShopStore } = this.props;

    return (
      <View>
      </View>

    );
  }

}

export default ProductImages;
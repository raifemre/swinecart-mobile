import React, { PureComponent } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { View } from 'native-base';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';

import ImageWrapper from '../../../shared/ImageWrapper';
import Lightbox from 'react-native-lightbox';

const URL_PREFIX = 'http://swinecart.test/images/product/large/';
const { width } = Dimensions.get('window');

class ImageSlider extends PureComponent {

  state = {
    currentIndex: 0,
  };


  renderItem = ({ item }) => {
    return (
      <ImageWrapper
        width={width}
        height={200}
        uri={`${URL_PREFIX}${item.name}`}
        resizeMode={FastImage.resizeMode.contain}
      />
    );
  }

  render() {

    const { images } = this.props;

    return (
      <View style={{ backgroundColor: '#ecf0f1', height: 200 }}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={images}
          renderItem={this.renderItem}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index) => this.setState({ currentIndex: index })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default ImageSlider;
import React, { Component } from 'react';
import {
  StyleSheet, Dimensions
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import {
  Text, View, Form
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import {
  toJS
} from 'mobx';

import Farm from './Farm';
import UserStore from '../../../mobx/stores/UserStore';


const wp = percentage => Math.round((percentage * viewportWidth) / 100);
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const slideWidth = wp(100);
const itemHorizontalMargin = wp(0);
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

@inject('UserStore')
@observer
class Farms extends Component {

  state = {
    activeSlide: 0,
    carousel: null
  }

  renderItem({ item, index }) {
    return (
      <Farm farm={item}/>
    );
  }

  render() {

    const {
      container, openSansSemiBold, paginationDot
    } = styles;

    const { activeSlide } = this.state;

    return (
      <React.Fragment>
        <View style={[container]}>
          <View style={[{ marginTop: 15 }]}>
            <Pagination
              dotsLength={toJS(UserStore.farms).length}
              activeDotIndex={activeSlide}
              dotColor={'#00af66'}
              dotStyle={paginationDot}
              inactiveDotColor={'#1a1917'}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this.carousel}
              tappableDots={!!this.carousel}
              vertical={false}
            />
            <Carousel
              ref={c => { this.carousel = c; }}
              data={UserStore.farms}
              renderItem={this.renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              firstItem={0}
              onSnapToItem={index => this.setState({ activeSlide: index })}
            />
          </View>
        </View>
      </React.Fragment>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold'
  },
  openSansSemiBold: {
    fontFamily: 'OpenSans-SemiBold'
  },
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1
  },
  paginationDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
  }
});

export default Farms;
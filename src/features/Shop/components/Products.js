import React, { PureComponent } from 'react';

import {
  StyleSheet, Dimensions
} from 'react-native';

import GridView from 'react-native-super-grid';

import GridItem from './GridItem';

import data from './data.json';

import {
   values
} from 'lodash'

class Products extends PureComponent {

  constructor() {
    super();
    this.screenWidth = Dimensions.get('screen').width;
    this.itemDimension = this.screenWidth > 300 ? 300 : this.screenWidth;
  }

  renderGridItem = (product) => {
    return (
      <GridItem 
        product={product}
      />
    );
  }
  

  render() {

    const {
      openSansBold, openSansSemiBold
     } = styles;

    return (
      <GridView
        itemDimension={this.itemDimension}
        itemPerRow={1}
        items={data.data}
        renderItem={this.renderGridItem}
      />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundWhite: {
    backgroundColor: '#ffffff'
  },
  backgroundPrimary: {
    backgroundColor: '#00af66'
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
  openSansRegular: {
    fontFamily: 'OpenSans-Regular'
  },
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  }
});

export default Products;
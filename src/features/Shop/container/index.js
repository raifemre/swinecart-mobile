import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, View, Input, Item, Icon } from 'native-base';

import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BackButton from '../../../shared/BackButton';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import Products from '../components/Products';

import Navigation from '../../../services/navigation';

@inject('ShopStore')
@observer
class Shop extends Component {

  componentDidMount() {
    this.props.ShopStore.getProducts();
  }

  handleOnFocus = () => {
    Navigation.navigate('SearchProduct');
  }

  render() {

    const { contentStyle } = styles;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={false} />
        <Container>
          <HeaderWrapper searchBar rounded>
            <Item>
              <Icon name='ios-search' />
              <Input placeholder='Search' onFocus={this.handleOnFocus}/>
            </Item>
          </HeaderWrapper>
          <View style={[contentStyle, { paddingTop: 16 }]}>
            <Products />
          </View>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
});

export default Shop;
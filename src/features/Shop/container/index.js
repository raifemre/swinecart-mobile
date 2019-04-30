import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, View, Right } from 'native-base';

import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import IconButton from '../../../shared/IconButton';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import Products from '../components/Products';
import SearchBar from '../components/SearchBar';

import Navigation from '../../../services/navigation';

@inject('ShopStore', 'SwineCartStore')
@observer
class Shop extends Component {

  componentDidMount() {
    this.props.ShopStore.getProducts();
  }

  onFocusSearchBar = () => {
    Navigation.navigate('SearchProduct');
  }

  navigateToFilter = () => {
    Navigation.navigate('FilterProductsCustomer');
  }

  render() {

    const { contentStyle } = styles;
    const { ShopStore, SwineCartStore } = this.props;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={SwineCartStore.loadingAdd} />
        <Container>
          <HeaderWrapper>
            <View style={{ flex: 5 }}>
              <SearchBar />
            </View>
            <Right>
              <IconButton
                marginLeft={0}
                marginRight={0}
                size={30}
                name='filter-outline'
                color='#ffffff'
                type='MaterialCommunityIcons'
                onPress={this.logout}
              />
            </Right>
          </HeaderWrapper>
          <View style={contentStyle}>
            <Products />
          </View>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1, paddingTop: 10,
  },
});

export default Shop;
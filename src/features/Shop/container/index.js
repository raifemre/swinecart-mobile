import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, View, Input, Item, Icon, Right } from 'native-base';

import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import FlatButton from '../../../shared/FlatButton';
import IconWrapper from '../../../shared/IconWrapper';
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

  navigateToFilter = () => {
    Navigation.navigate('FilterProductsCustomer');
  }

  render() {

    const { contentStyle } = styles;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={false} />
        <Container>
          <HeaderWrapper searchBar rounded>
            <Item style={{ flex: 3 }}>
              <Icon name='ios-search' />
              <Input placeholder='Search' onFocus={this.handleOnFocus}/>
            </Item>
            <Right>
              <FlatButton transparent onPress={this.navigateToFilter}>
                <IconWrapper name='filter-list' color='#ffffff'/>
              </FlatButton>
            </Right>
          </HeaderWrapper>
          <View style={[contentStyle, { paddingTop: 16, paddingBottom: 50 }]}>
            <Products />
          </View>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
  },
});

export default Shop;
import React, { Component } from 'react';
import { Container, View, Left, Right, Spinner } from 'native-base';
import { observer, inject } from 'mobx-react';

import Products from '../components/Products';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import IconButton from '../../../shared/IconButton';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import { Navigation } from '../../../services';

import styles from '../styles';
@inject('ProductsStore', 'FarmStore')
@observer
class ManageProducts extends Component {

  componentDidMount() {
    this.props.ProductsStore.getProducts();
    this.props.FarmStore.getFarms();
  }

  navigateToAdd = () => {  
    Navigation.navigate('AddProduct');
  }

  navigateToFilter = () => {
    // Navigation.navigate('FilterProducts');
  }

  render() {
    const { flex1 } = styles;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={this.props.ProductsStore.loading} />
        <Container>
          <HeaderWrapper>
            <Left style={flex1}>
              <IconButton marginLeft={8} marginRight={0}
                size={26}
                color='#ffffff'
                name='plus'
                type='MaterialCommunityIcons'
                onPress={this.navigateToAdd}
              />
            </Left>
            <BodyWrapper title='Manage Products' />
            <Right style={flex1}>
              <IconButton marginLeft={0} marginRight={0}
                size={26}
                color='#ffffff'
                name='filter-outline'
                type='MaterialCommunityIcons'
                onPress={this.navigateToFilter}
              />
            </Right>
          </HeaderWrapper>
          <View style={flex1}>
            {!this.props.ProductsStore.products
              && <View style={[flex1, { justifyContent: 'center', alignItems: 'center' }]}><Spinner color='#00695C' /></View>}
            {this.props.ProductsStore.products && <Products />}
          </View>
        </Container>
      </React.Fragment>
    );
  }

}

export default ManageProducts;
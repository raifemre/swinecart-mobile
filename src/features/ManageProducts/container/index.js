import React, { Component } from 'react';
import { Container, View, Left, Right } from 'native-base';
import { observer, inject } from 'mobx-react';

import Products from '../components/Products';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import IconButton from '../../../shared/IconButton';
import IconWrapper from '../../../shared/IconWrapper';

import { Navigation } from '../../../services';

import styles from '../styles';
@inject('ProductsStore')
@observer
class ManageProducts extends Component {

  componentDidMount() {
    this.props.ProductsStore.getProducts();
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
          <Products />
        </View>
      </Container>
    );
  }

}

export default ManageProducts;
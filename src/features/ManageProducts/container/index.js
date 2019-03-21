import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { 
  Container, View, Left, Right
} from 'native-base';

import { observer, inject } from 'mobx-react';

import Products from '../components/Products';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import FlatButton from '../../../shared/FlatButton';
import IconWrapper from '../../../shared/IconWrapper';

import Navigation from '../../../services';

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
    Navigation.navigate('FilterProducts');
  }

  render() {
    const { contentStyle, viewStyle } = styles;

    return (
      <Container>
        <HeaderWrapper>
          <Left style={contentStyle}>
            <FlatButton transparent onPress={this.navigateToAdd}>
              <IconWrapper name='add' color='#FFFFFF' />
            </FlatButton>
          </Left>
          <BodyWrapper title='Manage Products' />
          <Right style={contentStyle}>
            <FlatButton transparent onPress={this.navigateToFilter}>
              <IconWrapper name='filter-list' color='#FFFFFF' />
            </FlatButton>
          </Right>
        </HeaderWrapper>
        <View style={viewStyle}>
          <Products />
        </View>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  }
});

export default ManageProducts;
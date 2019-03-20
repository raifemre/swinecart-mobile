import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { 
  Container, View, Icon, Left, Button, Right
} from 'native-base';

import { observer, inject } from 'mobx-react';

import Products from '../components/Products';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import FlatButton from '../../../shared/FlatButton';
import IconWrapper from '../../../shared/IconWrapper';

import { Navigation } from '../../../services';

@inject('ProductsStore')
@observer
class ManageProducts extends Component {

  componentDidMount() {
    // this.props.ProductsStore.getProducts();
  }

  navigateToAdd = () => {  
    Navigation.navigate('AddProduct');
  }

  navigateToFilter = () => {
    Navigation.navigate('FilterProducts');
  }

  render() {
    const { contentStyle } = styles;

    return (
      <Container>
        <HeaderWrapper>
          <Left style={[contentStyle]}>
            <FlatButton transparent onPress={this.navigateToAdd}>
              <IconWrapper name='add' />
            </FlatButton>
          </Left>
          <BodyWrapper title='Manage Products' />
          <Right style={[contentStyle]}>
            <FlatButton transparent onPress={this.navigateToFilter}>
              <IconWrapper name='filter-list' />
            </FlatButton>
          </Right>
        </HeaderWrapper>
        <View style={[contentStyle, { backgroundColor: '#F2F2F2' }]}>
          {
            // <Products />
          }
        </View>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold'
  }
});

export default ManageProducts;
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { 
  Container, View, Header, Body, Title, Icon, Left, Button, Right
} from 'native-base';

import { observer, inject } from 'mobx-react';

import Products from '../components/Products';
import StyleProviderWrapper from '../../../shared/StyleProviderWrapper';

import { Navigation } from '../../../services';

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
    const {
      openSansBold, contentStyle
    } = styles;

    return (
      <StyleProviderWrapper>
        <Container>
          <Header noShadow androidStatusBarColor='#00695C'>
            <Left style={[contentStyle]}>
              <Button transparent onPress={this.navigateToAdd}>
                <Icon type='Feather' name='plus' style={{ color: '#FFFFFF' }} />
              </Button>
            </Left>
            <Body style={{ flex: 3, alignItems: 'center' }}>
              <Title style={[openSansBold, { color: '#FFFFFF' }]}>
                Manage Products
            </Title>
            </Body>
            <Right style={[contentStyle]}>
              <Button transparent onPress={this.navigateToFilter}>
                <Icon type='Feather' name='filter' style={{ color: '#FFFFFF' }} />
              </Button>
            </Right>
          </Header>
          <View style={[contentStyle, { backgroundColor: '#f7f7f7' }]}>
            {
              <Products />
            }
          </View>
        </Container>
      </StyleProviderWrapper>
    );
  }

}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
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
});

export default ManageProducts;
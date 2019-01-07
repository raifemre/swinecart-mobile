import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import StyleProviderWrapper from '../../../shared/StyleProviderWrapper';

import {
  Container, Header, Body, Title, View, Right, Left, Button, Icon
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import { Navigation } from '../../../services';

import Requests from '../components/Requests';

@inject('UserStore', 'DashboardStore')
@observer
class ProductRequests extends Component {

  componentDidMount() {
    const { DashboardStore } = this.props;
    DashboardStore.getProductRequests();
  }

  componentWillUnmount() {
    const { DashboardStore } = this.props;
    DashboardStore.setSelectedProduct(null);
    DashboardStore.clearProductRequests();
  }

  render() {

    const {
      openSansBold, contentStyle
    } = styles;

    const { DashboardStore } = this.props;

    return (
      <StyleProviderWrapper>
        <Container>
          <Header noShadow androidStatusBarColor='#ffffff'>
            <Left style={[contentStyle]}>
              <Button transparent onPress={Navigation.back}>
                <Icon type='Feather' name='arrow-left' style={{ color: '#000000' }} />
              </Button>
            </Left>
            <Body style={{ flex: 3, alignItems: 'center' }}>
              <Title style={[openSansBold, { color: '#000000' }]}>
                {DashboardStore.selectedProduct.name} Product Requests
              </Title>
            </Body>
            <Right />
          </Header>
          <View style={[contentStyle, { padding: 15 }]}>
            <Requests />
          </View>
        </Container>
      </StyleProviderWrapper>
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
  cardStyle: {
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0.1,
    elevation: 1
  },
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
});

export default ProductRequests;
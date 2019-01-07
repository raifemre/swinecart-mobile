import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import StyleProviderWrapper from '../../../shared/StyleProviderWrapper';

import {
  Container, Header, Body, Title, View
} from 'native-base';


import {
  observer, inject
} from 'mobx-react';

import Products from '../components/Products';

@inject('UserStore', 'DashboardStore')
@observer
class Inventory extends Component {

  componentDidMount() {
    const { DashboardStore } = this.props;
    DashboardStore.getProducts();
  }

  render() {

    const {
      openSansBold, contentStyle
    } = styles;

    return (
      <StyleProviderWrapper>
        <Container>
          <Header noShadow androidStatusBarColor='#ffffff'>
            <Body style={{ flex: 3, alignItems: 'center' }}>
              <Title style={[openSansBold, { color: '#000000' }]}>
                Product Inventory
            </Title>
            </Body>
          </Header>
          <View style={[contentStyle, { padding: 15 }]}>
            <Products />
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

export default Inventory;
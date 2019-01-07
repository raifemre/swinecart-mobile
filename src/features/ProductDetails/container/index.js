import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import StyleProviderWrapper from '../../../shared/StyleProviderWrapper';

import {
  Container, Content, Header, Body, Title, Text, Icon, Left,
  Button, Right, Form, Input, View, Item, Picker, DatePicker, Grid, Col, Radio,
  Row
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import { Navigation } from '../../../services';


@inject('UserStore', 'ProductsStore')
@observer
class ProductDetails extends Component {
  render() {
    const {
      openSansBold, contentStyle
    } = styles;

    return (
      <StyleProviderWrapper>
        <Container>
          <Header noShadow androidStatusBarColor='#ffffff'>
            <Left style={[contentStyle]}>
              <Button transparent onPress={Navigation.back}>
                <Icon type='Feather' name='arrow-left' style={{ color: '#000000' }} />
              </Button>
            </Left>
            <Body style={{ flex: 1, alignItems: 'center' }}>
              <Title style={[openSansBold, { color: '#000000', fontSize: 16 }]}>
                Product Details
            </Title>
            </Body>
            <Right />
          </Header>
          <View style={[contentStyle, { padding: 15 }]}>
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
  modalContent: {
    backgroundColor: "white",
    padding: 18,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
});

export default ProductDetails;
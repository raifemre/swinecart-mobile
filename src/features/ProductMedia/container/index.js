import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Container, Body, Title, Left, Right, Button, Icon } from 'native-base'
import { observer, inject } from 'mobx-react';

import { Navigation } from '../../../services';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import IconWrapper from '../../../shared/IconWrapper';

// @inject('MessageStore')
@observer
class ProductMedia extends Component {

  componentDidMount() {

  }

  render() {

    const { contentStyle, openSansBold } = styles;

    return (
      <Container>
        <HeaderWrapper>
          <Left style={[contentStyle]}>
            <Button transparent onPress={Navigation.back}>
              <IconWrapper name='arrow-back' style={{ color: '#ffffff' }} />
            </Button>
          </Left>
          <Body style={{ flex: 3, alignItems: 'center' }}>
            <Title style={[openSansBold, { color: '#ffffff' }]}>
              Product Media
            </Title>
          </Body>
          <Right />
        </HeaderWrapper>
        <View style={[{ backgroundColor: '#F2F2F2', paddingBottom: 50, flex: 1 }]}>
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

export default ProductMedia;
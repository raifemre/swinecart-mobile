import React, { Component } from 'react';

import { Container, View, Left, Right, Content } from 'native-base';

import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BackButton from '../../../shared/BackButton';
import BodyWrapper from '../../../shared/BodyWrapper';

import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import DeliveryForm from '../components/DeliveryForm';
import { toJS } from 'mobx';

@inject('SwineCartStore', 'SendForDeliveryForm')
@observer
class RequestItem extends Component {

  render() {

    const { navigation, SendForDeliveryForm } = this.props;
    const product = navigation.getParam('product');
    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={SendForDeliveryForm.loading} />
        <Container>
          <HeaderWrapper>
            <Left style={[{ flex: 1 }]}>
              <BackButton icon='close' />
            </Left>
            <BodyWrapper title={`Send Product`} />
            <Right />
          </HeaderWrapper>
          <Content>
            <View style={{ padding: 5, flex: 1, justifyContent: 'center', alignContent: 'center', }}>
              <DeliveryForm product={product} />
            </View>
          </Content>
        </Container>
      </React.Fragment>
    );
  }

}

export default RequestItem;
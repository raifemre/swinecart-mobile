import React, { Component } from 'react';

import { Container, View, Left, Right, Content } from 'native-base';

import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BackButton from '../../../shared/BackButton';
import BodyWrapper from '../../../shared/BodyWrapper';

import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import DeliveryForm from '../components/DeliveryForm';

@inject('SwineCartStore', 'SendForDeliveryForm')
@observer
class RequestItem extends Component {

  render() {

    const { navigation, SendForDeliveryForm } = this.props;
    const item = navigation.getParam('item');

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={SendForDeliveryForm.loading} />
        <Container>
          <HeaderWrapper>
            <Left style={[{ flex: 1 }]}>
              <BackButton icon='close' />
            </Left>
            <BodyWrapper title={`Request Product`} />
            <Right />
          </HeaderWrapper>
          <Content>
            <View style={{ padding: 5, flex: 1, justifyContent: 'center', alignContent: 'center', }}>
              <DeliveryForm item={item} />
            </View>
          </Content>
        </Container>
      </React.Fragment>
    );
  }

}

export default RequestItem;
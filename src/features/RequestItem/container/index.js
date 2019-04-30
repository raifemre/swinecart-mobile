import React, { Component } from 'react';

import { Container, View, Left, Right, Content } from 'native-base';

import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BackButton from '../../../shared/BackButton';
import BodyWrapper from '../../../shared/BodyWrapper';

import RequestForm from '../components/RequestForm';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

@inject('SwineCartStore', 'RequestItemForm')
@observer
class RequestItem extends Component {

  render() {

    const { navigation, RequestItemForm } = this.props;
    const item = navigation.getParam('item');

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={RequestItemForm.loading}/>
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
              <RequestForm item={item} />
            </View>
          </Content>
        </Container>
      </React.Fragment>
    );
  }

}

export default RequestItem;
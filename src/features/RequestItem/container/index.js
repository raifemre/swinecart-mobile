import React, { Component } from 'react';

import { Container, View, Left, Right, Content } from 'native-base';

import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BackButton from '../../../shared/BackButton';
import BodyWrapper from '../../../shared/BodyWrapper';

import Navigation from '../../../services/navigation';
import { toJS } from 'mobx';

import RequestForm from '../components/RequestForm';

@inject('SwineCartStore', 'RequestItemForm')
@observer
class RequestItem extends Component {

  render() {

    const { navigation, RequestItemForm } = this.props;
    const item = navigation.getParam('item');
    const { product } = item;
    const { name } = product;
    console.dir(toJS(item));

    return (
      <React.Fragment>
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
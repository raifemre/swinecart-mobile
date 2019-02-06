import React, { Component } from 'react';
import  { View, Container, Body, Title } from 'native-base'

import {  observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';

import Messages from '../components/Messages';
@inject('MessageStore')
@observer
class Conversations extends Component {

  componentDidMount() {
    const { MessageStore } = this.props;
    MessageStore.getThreads();
  }

  render() {

    return (
      <Container>
        <HeaderWrapper>
          <BodyWrapper title='Messages' />
        </HeaderWrapper>
        <View style={[{ backgroundColor: '#F2F2F2', paddingBottom: 50, flex: 1 }]}>
          <Messages />
        </View>
      </Container>
    );
  }

}

export default Conversations;
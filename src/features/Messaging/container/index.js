import React, { Component } from 'react';
import  { View, Container, Body, Title } from 'native-base'

import {  observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import StyleProviderWrapper from '../../../shared/StyleProviderWrapper';

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
      <StyleProviderWrapper>
        <Container>
          <HeaderWrapper>
            <Body style={{ flex: 1, alignItems: 'center' }}>
              <Title style={[{ color: '#ffffff', fontFamily: 'OpenSans-Bold' }]}>
                Messages
              </Title>
            </Body>
          </HeaderWrapper>
          <View style={[{ backgroundColor: '#F2F2F2', paddingBottom: 50, flex: 1 }]}>
            <Messages />
          </View>
        </Container>
      </StyleProviderWrapper>
    );
  }

}

export default Conversations;
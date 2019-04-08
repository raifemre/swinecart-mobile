import React, { Component } from 'react';
import  { View, Container } from 'native-base'

import {  observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import LoadingView from '../../../shared/LoadingView';

import Messages from '../components/Messages';
@inject('MessageStore')
@observer
class Conversations extends Component {

  componentDidMount() {
    this.props.MessageStore.getThreads();
  }

  render() {

    const { threads } = this.props.MessageStore;
    
    return (
      <Container>
        <HeaderWrapper>
          <BodyWrapper title='Messages' />
        </HeaderWrapper>
        <View style={{ backgroundColor: '#F2F2F2', flex: 1 }}>
          { threads && <Messages/> }
          { !threads && <LoadingView/> }
        </View>
      </Container>
    );
  }

}

export default Conversations;
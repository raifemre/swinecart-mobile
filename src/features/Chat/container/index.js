import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import {
  Container, Header, Body, Title, StyleProvider, Button, View, Icon, Left,
  Right, Text
} from 'native-base';

import { 
  GiftedChat, Bubble
} from 'react-native-gifted-chat';

import {
  observer, inject
} from 'mobx-react';

import {
  toJS
} from 'mobx';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import StyleProviderWrapper from '../../../shared/StyleProviderWrapper';
import {
  Navigation
} from '../../../services';

import StatusIndicator from '../components/StatusIndicator';
@inject('MessageStore', 'UserStore')
@observer
class Chat extends Component {

  renderBubble = props => {
    return (
      <Bubble {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f1f0f0',
          },
          right: {
            backgroundColor: '#00695C'
          }
        }}
      />
    );
  }

  componentDidMount() {
    this.props.MessageStore.getMessages();
  }

  onSend(messages = []) {
    const { MessageStore } = this.props;
    if(MessageStore.socket) {
      MessageStore.addMessage(messages);
    }
    else {
      alert('Not connected to chat!');
    }
  }

  render() {

    const { MessageStore, UserStore } = this.props;

    const {
      contentStyle, openSansBold
    } = styles;
    
    return (
      <StyleProviderWrapper>
        <Container>
          <HeaderWrapper>
            <Left style={[contentStyle]}>
              <Button transparent onPress={Navigation.back}>
                <Icon type='Feather' name='arrow-left' style={{ color: '#ffffff' }} />
              </Button>
            </Left>
            <Body style={{ flex: 3, alignItems: 'center' }}>
              <Title style={[openSansBold, { color: '#ffffff' }]}>
                {MessageStore.selectedUser.name}
              </Title>
            </Body>
            <Right></Right>
          </HeaderWrapper>
          <View style={[contentStyle]}>
            <StatusIndicator />
            <GiftedChat
              textInputProps={{
                autoFocus: false
              }}
              renderBubble={this.renderBubble}
              showAvatarForEveryMessage={false}
              renderAvatar={null}
              messages={toJS(this.props.MessageStore.messages)}
              onSend={messages => this.onSend(messages)}
              user={{
                _id: UserStore.userId,
                name: UserStore.user.name
              }}
            />
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
  }
});

export default Chat;
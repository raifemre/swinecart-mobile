import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
  Container, View, Left, Right
} from 'native-base';

import { 
  GiftedChat, Bubble
} from 'react-native-gifted-chat';

import {
  observer, inject
} from 'mobx-react';

import {
  toJS, get
} from 'mobx';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import BackButton from '../../../shared/BackButton';

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

  onEndReached = async () => {
    await this.props.MessageStore.getMoreMessages();
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
    const { contentStyle } = styles;
    const { MessageStore, UserStore } = this.props;

    return (
      <Container>
        <HeaderWrapper>
          <Left style={[contentStyle]}>
            <BackButton />
          </Left>
          <BodyWrapper title={MessageStore.selectedUser.name} />
          <Right></Right>
        </HeaderWrapper>
        <View style={[contentStyle]}>
          <GiftedChat
            textInputProps={{
              autoFocus: false
            }}
            loadEarlier={true}
            onLoadEarlier={this.onEndReached}
            timeFormat={'LTS'}
            dateFormat={'LL'}
            renderBubble={this.renderBubble}
            showAvatarForEveryMessage={false}
            renderAvatar={null}
            scrollToBottom={true}
            messages={toJS(get(this.props.MessageStore.allMessages, `${MessageStore.selectedUser.id}`))}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: UserStore.userId,
              name: UserStore.user.name
            }}
          />
        </View>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
  }
});

export default Chat;
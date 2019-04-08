import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Card, CardItem, View } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';
import { get } from 'mobx';

import { Navigation } from '../../../services'

import moment from 'moment';

@inject('MessageStore')
@observer
class Thread extends Component {

  onPress = () => {
    const { MessageStore, thread } = this.props;
    MessageStore.setSelectedUser(thread.user);
    Navigation.navigate('Chat');
  }

  render() {
    const { cardStyle } = styles;
    const { thread, MessageStore } = this.props;
    const { user } = thread;
    const { id, name } = user;
    const { text, createdAt: created_at, readAt, direction } = get(MessageStore.allMessages, `${id}`)[0];
    const createdAt = moment(created_at).format('h:mm:ss a');
    const msg = direction === 1 ? `You: ${text}` : `${text}`;
    return (
      <View style={{ paddingHorizontal: 5 }}>
        <Card style={[cardStyle]}>
          <CardItem button onPress={this.onPress} style={{ borderRadius: 5 }}>
            <View>
              <TextWrapper
                font={'OpenSans-SemiBold'}
                text={name}
                size={14}
              />
              <TextWrapper
                font={'OpenSans-SemiBold'}
                color={readAt ? '#7f8c8d' : '#000000'}
                text={msg}
                size={12}
              />
              <TextWrapper
                font={'OpenSans-SemiBold'}
                color={readAt ? '#7f8c8d' : '#000000'}
                text={createdAt}
                size={12}
              />
            </View>
          </CardItem>
        </Card>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 5,
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 1,
    elevation: 1,
  }
});

export default Thread;
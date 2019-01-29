import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { StyleSheet } from 'react-native';

import TextWrapper from '../../../shared/TextWrapper';
import { Card, CardItem, View } from 'native-base';
import { toJS } from 'mobx';

import {
  Navigation
} from '../../../services'

import moment from 'moment';

@inject('MessageStore')
@observer
class Thread extends Component {

  componentDidMount() {

  }


  onPress = () => {
    const { MessageStore, thread } = this.props;
    MessageStore.setSelectedUser(thread.user);
    Navigation.navigate('Chat');
  }

  render() {
    const { cardStyle } = styles;
    const { thread } = this.props;
    const { user, message, direction, read_at, created_at } = thread;
    const { name } = user;
    const createdAt = moment(created_at).format('h:mm:ss a'); // January 29th 2019, 6:20:43 pm
    const text = direction === 1 ? `You: ${message} ${createdAt}` : `${message} - ${createdAt}`;

    return (
      <View style={{ paddingHorizontal: 10 }}>
        <Card style={[cardStyle]}>
          <CardItem button onPress={this.onPress} style={{ borderRadius: 20 }}>
            <View>
              <TextWrapper
                font={'OpenSans-Bold'}
                text={name}
                size={16}
              />
              <TextWrapper
                font={'OpenSans-Bold'}
                color={read_at ? '#7f8c8d' : '#000000'}
                text={text}
                size={13}
              />
            </View>
          </CardItem>
        </Card>
      </View>
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
  },
  cardStyle: {
    borderRadius: 20,
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0,
    elevation: 2,
  }
});

export default Thread;
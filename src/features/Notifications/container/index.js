import React, { Component } from 'react';


import {
  Container, View, Body, Title,
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import { NavigationEvents } from 'react-navigation';


import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';

import Notifs from '../components/Notifications';

@inject('NotificationStore')
@observer
class Notifications extends Component {

  render() {

    const { NotificationStore } = this.props;

    return (
      <React.Fragment>
        <NavigationEvents
          onDidFocus={() => { NotificationStore.readNotifications() }}
          onDidBlur={() => { NotificationStore.readNotifications() }}
        />
        <Container>
          <HeaderWrapper>
            <BodyWrapper title='Notifications' />
          </HeaderWrapper>
          <View style={[{ backgroundColor: '#F2F2F2', paddingBottom: 50, flex: 1 }]}>
            <Notifs />
          </View>
        </Container>
      </React.Fragment>
    );
  }

}

export default Notifications;
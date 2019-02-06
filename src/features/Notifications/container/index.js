import React, { Component } from 'react';


import {
  Container, View, Body, Title,
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import { NavigationEvents } from 'react-navigation';


import HeaderWrapper from '../../../shared/HeaderWrapper';

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
            <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Title style={{ color: '#ffffff', fontFamily: 'OpenSans-Bold' }}>
                Notifications
              </Title>
            </Body>
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
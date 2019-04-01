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

import NotificationList from '../components/Notifications';

@inject('NotificationStore')
@observer
class Notifications extends Component {

  componentDidMount() {
    // this.props.NotificationStore.getNotifications();
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <HeaderWrapper>
            <BodyWrapper title='Notifications' />
          </HeaderWrapper>
          <View style={{ paddingBottom: 50, flex: 1 }}>
            <NotificationList />
          </View>
        </Container>
      </React.Fragment>
    );
  }

}

export default Notifications;
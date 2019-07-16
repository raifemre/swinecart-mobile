import React, { PureComponent } from 'react';

import { View } from 'react-native';

import {
  List
} from 'react-native-ui-kitten';

import Notification from './Notification';
import { Block, ContainerView } from '../../../shared/components';

class NotificationList extends PureComponent {

  render() {
    return (
      <ContainerView style={{ backgroundColor: '#ffffff' }}>
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </ContainerView>
    );
  }

}

export default NotificationList;

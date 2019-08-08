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
      <View style={{ backgroundColor: '#ffffff' }}>
        <Notification />
      </View>
    );
  }

}

export default NotificationList;

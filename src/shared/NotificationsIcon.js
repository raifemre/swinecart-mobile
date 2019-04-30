import React from 'react';
import {
  Icon, View, Text
} from 'native-base';
import { observer } from 'mobx-react';

import NotificationStore from '../mobx/stores/NotificationStore';

function NotificationsIcon({ focused }) {
  const count = Math.min(NotificationStore.unreadCount, 99);
  return (
    <View>
      {
        count > 0
          ? <View
            style={{
              position: 'absolute',
              bottom: 15,
              left: 15,
              width: 17,
              height: 17,
              borderRadius: 10,
              backgroundColor: '#ff0000',
              zIndex: 999
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "white",
                fontFamily: 'OpenSans-SemiBold',
                lineHeight: 17,
                fontSize: 9
              }}
            >
              {count}
            </Text>
          </View>
          : null
      }
      <Icon
        type='MaterialIcons'
        name='notifications'
        style={{ color: focused ? '#00695C' : '#000000' }} />
    </View>
  )
}

export default observer(NotificationsIcon);
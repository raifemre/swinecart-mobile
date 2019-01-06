import React from 'react';
import {
  Icon, View, Text
} from 'native-base';
import { observer } from 'mobx-react';

import NotificationStore from '../mobx/stores/NotificationStore';

function NotificationsIcon({ focused }) {

  return (
    <View>
      {
        // <View
        //   style={{
        //     position: 'absolute',
        //     bottom: 19,
        //     right: 20,
        //     width: 18,
        //     height: 18,
        //     borderRadius: 10,
        //     backgroundColor: '#ff0000'
        //   }}
        // >
        //   <Text
        //     style={{
        //       alignSelf: "center",
        //       color: "white",
        //       fontFamily: 'OpenSans-SemiBold',
        //       marginTop: 1,
        //       fontSize: 12
        //     }}
        //   >
        //   {NotificationStore.unreadCount}
        //   </Text>
        // </View>
      }
      <Icon
        type='Feather'
        name='bell'
        style={{ color: focused ? '#00af66' : '#000000' }} />
    </View>
  )
}

export default observer(NotificationsIcon);
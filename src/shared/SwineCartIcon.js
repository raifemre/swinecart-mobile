import React from 'react';
import {
  Icon, View, Text
} from 'native-base';
import { observer, inject } from 'mobx-react';

function SwineCartIcon({ focused, SwineCartStore }) {
  const count = Math.min(SwineCartStore.itemCount, 99);
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
                alignSelf: 'center',
                color: 'white',
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
        name='shopping-cart'
        style={{ color: focused ? '#00695C' : '#000000' }} />
    </View>
  )
}

export default inject('SwineCartStore')(observer(SwineCartIcon));
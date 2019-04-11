import React from 'react';
import { Animated } from 'react-native';
import { observer } from 'mobx-react';

function Placeholder({ placeholder }) {
  return (
    <Animated.Text style={{
      position: 'absolute',
      fontFamily: 'OpenSans-Bold',
      left: 10,
      top: -22,
      fontSize: 12,
      color: '#000000'
    }}>
      {placeholder}
    </Animated.Text>
  );
};

export default observer(Placeholder); 
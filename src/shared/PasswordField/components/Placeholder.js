import React from 'react';
import { Animated } from 'react-native';
import { observer } from 'mobx-react';

function Placeholder({ placeholder, labelStyle }) {
  return (
    <Animated.Text style={labelStyle}>
      {placeholder}
    </Animated.Text>
  );
};

export default observer(Placeholder);
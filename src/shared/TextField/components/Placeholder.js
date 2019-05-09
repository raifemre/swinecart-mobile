import React from 'react';
import { Animated } from 'react-native';
import { observer } from 'mobx-react';

import { fonts } from '../../../constants/theme';

function Placeholder({ placeholder, labelStyle }) {
  return (
    <Animated.Text style={[fonts.caption, labelStyle]}>
      {placeholder}
    </Animated.Text>
  );
};

export default observer(Placeholder);
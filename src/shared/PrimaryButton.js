import React from 'react';
import { Button } from 'native-base';

import Global from '../assets/css/global';
const { primaryColor } = Global;

function PrimaryButton({ onPress, children, style, ...props }) {
  return (
    <Button
      onPress={onPress}
      style={[
        { elevation: 0, backgroundColor: primaryColor, ...style }
      ]}
      {...props}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
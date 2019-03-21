import React from 'react';
import { Button } from 'native-base';

import IconWrapper from './IconWrapper';

function IconButton({ size, name, color, type, onPress, marginLeft, marginRight }) {
  return (
    <Button
      transparent 
      onPress={onPress}
      style={{ height: size, marginLeft, marginRight }}
    >
      <IconWrapper
        size={size}
        color={color}
        name={name}
        type={type}
        style={{ marginLeft: 0, marginRight: 0 }}
      />
    </Button>
  )
}

export default IconButton;

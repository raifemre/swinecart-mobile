import React from 'react';
import { Icon } from 'native-base';

function IconWrapper(props) {
  const { 
    type = 'MaterialIcons',
    size = 30,
    color = '#000000',
    style,
    ...otherProps 
  } = props;

  return (
    <Icon
      type={type}
      style={{ fontSize: size, color, ...style}}
      {...otherProps}
    />
  )
}

export default IconWrapper;
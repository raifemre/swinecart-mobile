import React from 'react';
import { Icon } from 'native-base';


function IconWrapper({ type = 'MaterialIcons',  ...props}) {
  return (
    <Icon
      type={type}
      {...props}
    />
  )
}

export default IconWrapper;
import React, { memo } from 'react';
import RNIcon from 'react-native-vector-icons/Feather';

function Icon(props) {

  const { name, color = '#ffffff', size = 24 } = props;

  return (
    <RNIcon
      name={name}
      color={color}
      size={size}
    />
  );
}

export default memo(Icon);
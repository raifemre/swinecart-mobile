import React from 'react';
import { Text } from 'native-base';

function TextWrapper({ style, ...props }) {
  const { 
    text, 
    uppercase = false, 
    size = 16, 
    color = '#000000', 
    font = 'OpenSans-Bold'
  } = props;

  return (
    <Text
      uppercase={uppercase} 
      style={{ fontSize: size, color, fontFamily: font, ...style }}
      numberOfLines={1}
    >
      {text}
    </Text>
  );
}

export default TextWrapper;
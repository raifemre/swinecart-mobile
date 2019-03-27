import React from 'react';
import { Button } from 'native-base';

import TextWrapper from './TextWrapper';

function ButtonWrapper(props) {

  const { onPress, text, textColor = '#ffffff', textFont = 'OpenSans-Bold', textSize = 30, buttonColor = '#00695C'} = props;

  return (
    <Button 
      block
      transparent
      onPress={onPress}
      style={{ 
        borderRadius: 5,
        backgroundColor: buttonColor,
        elevation: 0,
      }}>
      <TextWrapper
        color={textColor}
        text={text}
        font={textFont}
        size={textSize}
      />
    </Button>
  )
}

export default ButtonWrapper;
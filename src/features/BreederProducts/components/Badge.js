import React, { memo } from 'react';
import { Block, Text } from 'shared';

function Badge({ text, ...otherProps }) {
  return (
    <Block 
      alignSelf='flex-start' 
      center middle padding={0.5} 
      borderRadius={50}
      {...otherProps}
      >
      <Text bold color='white1' size={14}>
        {text}
      </Text>
    </Block>
  );

}

export default memo(Badge);
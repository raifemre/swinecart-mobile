import React from 'react';
import { Button } from 'native-base';
function FlatButton({ onPress, children, style, ...props }) {
  return (
    <Button
      onPress={onPress}
      style={[
        { elevation: 0, borderColor: 'transparent', borderBottomWidth: 0 },
        style
      ]}
      {...props}
    >
    {children}
    </Button>
  );
}

export default FlatButton;
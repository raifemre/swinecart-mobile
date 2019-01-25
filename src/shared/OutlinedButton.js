import React from 'react';
import { Button } from 'native-base';
function OutlinedButton({ children, style, ...props }) {
  return (
    <Button
      style={[
        { elevation: 0, backgroundColor: 'transparent', borderColor: '#ffffff', borderWidth: 2, ...style }
      ]}
      {...props}
    >
      {children}
    </Button>
  );
}

export default OutlinedButton;
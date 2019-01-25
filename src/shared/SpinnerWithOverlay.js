import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

function SpinnerWithOverlay({ visible, textContent = 'Loading...' }) {
  return (
    <Spinner
      visible={visible}
      overlayColor='rgba(0, 0, 0, 0.45)'
      textContent={textContent}
      textStyle={{
        fontFamily: 'OpenSans-Bold',
        color: '#ffffff',
        fontSize: 18
      }}
    />
  );
}

export default SpinnerWithOverlay;
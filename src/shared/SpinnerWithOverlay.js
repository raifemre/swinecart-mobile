import React, { Component } from 'react';
import Overlay from 'react-native-loading-spinner-overlay';
import Spinner from 'react-native-spinkit';

function SpinnerWithOverlay({ visible, textContent = 'Loading...' }) {
  return (
    <Overlay
      visible={visible}
      overlayColor='rgba(255, 255, 255, 0.70)'
      customIndicator={(
        <Spinner
          type='Pulse'
          color='#00695C'
          size={100}
        />
      )}
      textContent={textContent}
      textStyle={{
        fontFamily: 'OpenSans-SemiBold',
        color: '#00695C',
        fontSize: 18,
      }}
    />
  );
}

export default SpinnerWithOverlay;
import React, { Component } from 'react';
import Overlay from 'react-native-loading-spinner-overlay';
// import Spinner from 'react-native-spinkit';
import { Spinner } from 'native-base';

function SpinnerWithOverlay({ visible  }) {
  return (
    <Overlay
      visible={visible}
      overlayColor='rgba(0, 0, 0, 0.5)'
      customIndicator={(
        <Spinner
          color='#ffffff'
        />
      )}
    />
  );
}

export default SpinnerWithOverlay;
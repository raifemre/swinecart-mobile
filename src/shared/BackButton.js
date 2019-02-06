import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';

import Navigation from '../services/navigation';

import IconWrapper from './IconWrapper';

function BackButton(props) {
  return (
    <React.Fragment>
      <Button transparent onPress={Navigation.back}>
        <IconWrapper name='arrow-back' style={styles.colorWhite} />
      </Button>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  colorWhite: { color: '#ffffff' }
});

export default BackButton;
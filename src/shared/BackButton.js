import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'native-base';

import Navigation from '../services/navigation';
import IconWrapper from './IconWrapper';

function BackButton({ icon = 'arrow-back' }) {

  const goBack = () => Navigation.back();

  return (
    <React.Fragment>
      <Button transparent onPress={goBack}>
        <IconWrapper name={icon} style={styles.colorWhite} />
      </Button>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  colorWhite: { color: '#ffffff' }
});

export default BackButton;
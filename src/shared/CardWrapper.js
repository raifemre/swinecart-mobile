import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet } from 'react-native';
import { Card } from 'native-base';

function CardWrapper({ children }) {
  return (
    <Card style={styles.cardStyle}>
      {children}
    </Card>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0.1,
    elevation: 1,
  },
});

export default observer(CardWrapper);
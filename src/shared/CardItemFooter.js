import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet } from 'react-native';
import { CardItem } from 'native-base';

function CardItemFooter({ children }) {
  return (
    <CardItem last style={styles.cardItemLast}>
      {children}
    </CardItem>
  );
}

const styles = StyleSheet.create({
  cardItemLast: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: '#f7f7f7',
  },
});

export default observer(CardItemFooter);
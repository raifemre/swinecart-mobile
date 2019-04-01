import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet } from 'react-native';
import { CardItem } from 'native-base';

function CardItemFooter({ children }) {
  return (
    <CardItem last style={styles.cardItemBody}>
      {children}
    </CardItem>
  );
}

const styles = StyleSheet.create({
  cardItemBody: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
});

export default observer(CardItemFooter);
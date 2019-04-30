import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet } from 'react-native';
import { CardItem } from 'native-base';

import ImageWrapper from './ImageWrapper';

function CardItemHeader({ uri }) {

  const { cardItemFirst, image } = styles;

  return (
    <CardItem style={cardItemFirst}>
      <ImageWrapper uri={uri} resizeMode='stretch' style={image} />
    </CardItem>
  );
}

const styles = StyleSheet.create({
  cardItemFirst: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  image: {
    height: 100,
    width: 150,
    flex: 1,
    alignSelf: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
});

export default observer(CardItemHeader);
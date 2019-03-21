import React from 'react';
import { observer } from 'mobx-react';
import { Image } from 'react-native';
import { CardItem, View, Body } from 'native-base';

import StatusBadge from './StatusBadge';
import TextWrapper from '../../../shared/TextWrapper';
import styles from '../styles';

import { ternary } from '../../../utils';

function ProductInfo({ product, selected }) {

  const { id, name, breed, type, img_path, age, status } = product;
  const { cardItemFirst, cardItemBody, image } = styles;

  const cardItemBgColor = ternary(selected, true, '#00695C', 'transparent');
  const subTextColor = ternary(selected, true, '#ffffff', '#95A5A6');

  return (
    <React.Fragment>
      <CardItem style={[cardItemFirst, { backgroundColor: cardItemBgColor }]}>
        <Image source={{ uri: img_path }} resizeMode='stretch' style={image}/>
      </CardItem> 
      <CardItem style={[cardItemBody, { backgroundColor: cardItemBgColor }]}>
        <Body>
          <View style={{ flexDirection: 'row' }}>
            <TextWrapper
              text={name}
              font='OpenSans-Bold'
              color={ternary(selected, true, '#ffffff', '#2e3131')}
              size={15}
            />
            <StatusBadge status={product.status} />
          </View>
          <TextWrapper
            text={`${type} - ${breed}`}
            font='OpenSans-SemiBold'
            color={subTextColor}
            size={11}
          />
          <TextWrapper
            text={`${age} days old`}
            font='OpenSans-SemiBold'
            color={subTextColor}
            size={11}
          />
        </Body>
      </CardItem>
    </React.Fragment>
  );
}

export default observer(ProductInfo);

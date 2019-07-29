import React, { memo } from 'react';

import { TouchableOpacity } from 'react-native';

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import { Button, Avatar } from 'react-native-ui-kitten';

import { Block } from '../../../shared/components';

import NavigationService from '../../../services/navigation';

import { textStyles, colors, sizes } from '../../../constants/theme';

import ProductInfo from './ProductInfo';
import OrderStatus from './OrderStatus';

import { urls } from '../../../constants/randomImage';
import Chance from 'chance';
const chance = Chance();

function OrderItem(props) {

  const onPressView = () => {

  };

  const { themedStyle, data } = props;
  const { name, type, breed, customerName, statusTime, status } = data;

  return (
    <Block row padding style={themedStyle.container}>
      <Avatar
        shape='round'
        source={{ uri: chance.pickone(urls) }}
        style={themedStyle.imageStyle}
      />
      <Block paddingHorizontal>
        <ProductInfo name={name} type={type} breed={breed} />
        <OrderStatus customerName={customerName} statusTime={statusTime} status={status} />
        <Button
          size='medium'
          onPress={onPressView}
          style={themedStyle.buttonStyle}
        >
          Send for Delivery
        </Button>
        <Button
          size='medium'
          status='danger'
          onPress={onPressView}
          style={themedStyle.buttonStyle}
        >
          Cancel Transaction
        </Button>
      </Block>
    </Block>
  );
}

export default memo(withStyles(OrderItem, () => ({
  container: {
    minHeight: 150,
    overflow: 'hidden',
    backgroundColor: colors.white1,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1
  },
  imageStyle: {
    width: 96,
    height: 96,
    borderWidth: 1,
    borderColor: colors.gray2
  },
  statusStyle: {
    marginTop: sizes.margin / 2,
    color: '#000000',
    fontSize: 14,
  },
  requestsStyle: {
    color: colors.gray3,
    fontSize: 14,
  },
  buttonStyle: {
    marginTop: sizes.margin / 4,
    borderWidth: 0,
  }
})));
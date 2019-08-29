import React, { Fragment, memo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import { Avatar } from 'react-native-ui-kitten';

import { ModalService } from '../../../../services';
import { Block } from '../../../../shared/components';
import { colors } from '../../../../constants/theme';

import ProductInfo from './ProductInfo';
import OrderStatus from './OrderStatus';
import OrderActions from './OrderActions';
import { getHeight } from '../../../../utils/helpers';

function OrderItem(props) {
  
  const { themedStyle, data } = props;
  const { status, requestCount, product, reservation } = data;

  const { name, type, breed, image } = product;

  const onPressView = () => {
    ModalService.showModal('OrderDetails', { ...reservation });
  };

  const height = getHeight(status);

  return (
    <TouchableOpacity
      disabled={status === 'requested'}
      activeOpacity={0.50}
      onPress={onPressView}
    >
      <Block row padding style={[themedStyle.container]}>
        <Avatar
          shape='round'
          source={{ uri: image }}
          style={themedStyle.imageStyle}
        />
        <Block paddingHorizontal>
          <ProductInfo name={name} type={type} breed={breed} />
          <OrderStatus status={status} requestCount={requestCount} reservation={reservation} />
          <OrderActions status={status} product={product} reservation={reservation} />
        </Block>
      </Block>
    </TouchableOpacity>
  );
}

export default withStyles(memo(OrderItem, () => true), () => ({
  container: {
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
}));
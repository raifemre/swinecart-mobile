import React, { Fragment, memo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import { Avatar } from 'react-native-ui-kitten';
import { Block } from '../../../shared/components';
import { colors } from '../../../constants/theme';

import ProductInfo from './ProductInfo';
import OrderStatus from './OrderStatus';
import OrderActions from './OrderActions';

function OrderItem(props) {

  const onPressView = () => {

  };

  const { themedStyle, data } = props;
  const { name, type, breed, customerName, statusTime, status, requests, imageUrl } = data;

  const innerComponent = () => (
    <Fragment>
      <Block row padding style={themedStyle.container}>
        <Avatar
          shape='round'
          source={{ uri: imageUrl }}
          style={themedStyle.imageStyle}
        />
        <Block paddingHorizontal>
          <ProductInfo name={name} type={type} breed={breed} />
          <OrderStatus
            customerName={customerName}
            statusTime={statusTime}
            status={status}
            requests={requests}
          />
          <OrderActions status={status} />
        </Block>
      </Block>
    </Fragment>
  );

  return (
    <Fragment>
      {
        status !== 'requested' && 

        <TouchableOpacity
          activeOpacity={0.50}
          onPress={onPressView}
        >
          {innerComponent()}
        </TouchableOpacity>
      }
      {
        status === 'requested' && innerComponent()
      }
    </Fragment>
  );
}

export default withStyles(memo(OrderItem), () => ({
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
}));
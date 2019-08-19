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
  const { name, type, breed, customerName, statusTime, requests, img_path, id } = data;

  const status = (data.reservation && data.reservation.order_status) || data.status;

  const onPressView = () => {
    ModalService.showModal('OrderDetails', { ...data.reservation });
  };

  const height = getHeight(status);

  const innerComponent = () => (
    <Fragment>
      <Block row padding style={[themedStyle.container, { height }]}>
        <Avatar
          shape='round'
          source={{ uri: img_path }}
          style={themedStyle.imageStyle}
        />
        <Block paddingHorizontal>
          <ProductInfo name={name} type={type} breed={breed} />
          <OrderStatus
            data={data}
            customerName={customerName}
            statusTime={statusTime}
            status={status}
            requests={requests}
          />
          <OrderActions status={status} productName={name} customerName={customerName} id={id} data={data} />
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
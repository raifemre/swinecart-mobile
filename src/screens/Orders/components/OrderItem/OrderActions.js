import React, { Fragment, memo } from 'react';
import { useDispatch } from 'react-redux';
import { withStyles } from 'react-native-ui-kitten/theme';

import { Button } from 'react-native-ui-kitten';

import {
  NavigationService, ModalService
} from '../../../../services';

import { textStyles, sizes } from '../../../../constants/theme';

import { setCurrentId } from 'actions/requests';

function OrderActions(props) {

  const dispatch = useDispatch();

  const { themedStyle, status, product, reservation } = props;
  const { id } = product;
  // const { customerName } = reservation;

  const onPressView = () => {
    dispatch(setCurrentId(id));
    NavigationService.navigate('Requests');
  };

  const onPressCancel = () => {
    ModalService.showModal('CancelTransaction', { product, reservation });
  };

  const onPressSend = () => {
    ModalService.showModal('SendProduct', { product, reservation });
  };

  const onPressConfirm = () => {
    ModalService.showModal('ConfirmSold', { product, reservation });
  };

  return (
    <Fragment>
      {
        status === 'requested' &&
        <Button
          size='medium'
          onPress={onPressView}
          textStyle={themedStyle.buttonTextStyle}
          style={themedStyle.buttonStyle}
        >
          View Requests
        </Button>
      }
      {
        status === 'reserved' &&
        <Fragment>
          <Button
            size='medium'
            onPress={onPressSend}
            textStyle={themedStyle.buttonTextStyle}
            style={themedStyle.buttonStyle}
          >
            Send for Delivery
          </Button>
          <Button
            size='medium'
            status='danger'
            onPress={onPressCancel}
            textStyle={themedStyle.buttonTextStyle}
            style={themedStyle.buttonStyle}
          >
            Cancel Transaction
         </Button>
        </Fragment>
      }
      {
        status === 'onDelivery' &&
        <Fragment>
          <Button
            size='medium'
            onPress={onPressConfirm}
            textStyle={themedStyle.buttonTextStyle}
            style={themedStyle.buttonStyle}
          >
            Confirm Sold
          </Button>
          <Button
            size='medium'
            status='danger'
            onPress={onPressCancel}
            textStyle={themedStyle.buttonTextStyle}
            style={themedStyle.buttonStyle}
          >
            Cancel Transaction
         </Button>
        </Fragment>
      }
    </Fragment>
  );
}

export default withStyles(memo(OrderActions, () => true), () => ({
  buttonStyle: {
    ...textStyles.button,
    marginTop: sizes.margin / 4,
    borderWidth: 0,
  }
}));
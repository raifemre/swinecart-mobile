import React, { Fragment, memo } from 'react';

import { withStyles } from 'react-native-ui-kitten/theme';

import { Button } from 'react-native-ui-kitten';

import {
  NavigationService, ModalService
} from '../../../../services';

import { textStyles, sizes } from '../../../../constants/theme';

function OrderActions(props) {

  const { themedStyle, status, customerName, productName } = props;

  const onPressView = () => {
    NavigationService.navigate('Requests');
  };

  const onPressCancel = () => {
    ModalService.showModal('CancelTransaction', { customerName, productName });
  };

  const onPressSend = () => {
    ModalService.showModal('SendProduct', { customerName, productName });
  };

  const onPressConfirm = () => {
    ModalService.showModal('ConfirmSold', { customerName, productName });
  };


  return (
    <Fragment>
      {
        status === 'requested' &&
        <Button
          size='medium'
          onPress={onPressView}
          textStyle={[textStyles.button, themedStyle.buttonTextStyle]}
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
            textStyle={[textStyles.button, themedStyle.buttonTextStyle]}
            style={themedStyle.buttonStyle}
          >
            Send for Delivery
          </Button>
          <Button
            size='medium'
            status='danger'
            onPress={onPressCancel}
            textStyle={[textStyles.button, themedStyle.buttonTextStyle]}
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
            textStyle={[textStyles.button, themedStyle.buttonTextStyle]}
            style={themedStyle.buttonStyle}
          >
            Confirm Sold
          </Button>
          <Button
            size='medium'
            status='danger'
            onPress={onPressCancel}
            textStyle={[textStyles.button, themedStyle.buttonTextStyle]}
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
    marginTop: sizes.margin / 4,
    borderWidth: 0,
  }
}));
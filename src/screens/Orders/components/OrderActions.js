import React, { Fragment, memo } from 'react';

import { withStyles } from 'react-native-ui-kitten/theme';

import { Button } from 'react-native-ui-kitten';

import {
  NavigationService
} from '../../../services';

import { textStyles, sizes } from '../../../constants/theme';

function OrderActions(props) {

  const onPressView = () => {
    NavigationService.navigate('Requests');
  };

  const onPressCancel = () => {
    alert('Cancel Transaction');
  };

  const onPressSend = () => {
    alert('Send for Delivery');
  };

  const onPressConfirm = () => {
    alert('Confirm');
  };

  const { themedStyle, status } = props;

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

export default withStyles(memo(OrderActions), () => ({
  buttonStyle: {
    marginTop: sizes.margin / 4,
    borderWidth: 0,
  }
}));
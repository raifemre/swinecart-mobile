import React, { Fragment, memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';

import { textStyles, colors, sizes } from '../../../../constants/theme';

import {
  addS, formatStatusTime
} from '../../../../utils/formatters';

function OrderStatus(props) {

  const { themedStyle, status, customerName, statusTime, requests, data } = props;

  const statusTexts = {
    'requested': 'Requested',
    'reserved': 'Reserved',
    'on_delivery': 'On Delivery',
    'sold': 'Sold',
  };

  return (
    <Fragment>
      <Text
        category='s2'
        style={[textStyles.label, themedStyle.statusStyle]}
      >
        {statusTexts[status]}
      </Text>
      {/* {
        status === 'requested' &&
        <Text
          category='s2'
          style={[textStyles.caption1, themedStyle.requestsStyle]}
        >
          {`by ${requests} ${addS(requests, 'user')}`}
        </Text> 
      } */}
      {
        status !== 'requested' &&
        <Fragment>
          <Text
            category='s2'
            style={[textStyles.caption1, themedStyle.requestsStyle]}
          >
            {`to ${data.reservation.customer_name}`}
          </Text>
          <Text
            category='s2'
            style={[textStyles.caption1, themedStyle.requestsStyle]}
          >
            {data.reservation.status_time}
          </Text>
        </Fragment>
      }
    </Fragment>
  );
}

export default withStyles(memo(OrderStatus, () => true), () => ({
  statusStyle: {
    marginTop: sizes.margin / 2,
    color: '#000000',
    fontSize: 14,
  },
  requestsStyle: {
    color: colors.gray3,
    fontSize: 14,
  }
}));
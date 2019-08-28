import React, { Fragment, memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';

import { textStyles, colors, sizes } from '../../../../constants/theme';

import {
  addS, formatStatusTime
} from '../../../../utils/formatters';

function OrderStatus(props) {

  const { themedStyle, status, reservation, requestCount } = props;

  const statusTexts = {
    'requested': 'Requested',
    'reserved': 'Reserved',
    'onDelivery': 'On Delivery',
    'sold': 'Sold',
  };

  return (
    <Fragment>
      <Text
        category='s2'
        style={themedStyle.statusStyle}
      >
        {statusTexts[status]}
      </Text>
      {
        status === 'requested' &&
        <Text
          category='s2'
          style={themedStyle.requestsStyle}
        >
          {`by ${requestCount} ${addS(requestCount, 'user')}`}
        </Text> 
      }
      {
        status !== 'requested' &&
        <Fragment>
          <Text
            category='s2'
            style={themedStyle.requestsStyle}
          >
            {`to ${reservation.customerName}`}
          </Text>
          <Text
            category='s2'
            style={themedStyle.requestsStyle}
          >
            {formatStatusTime(reservation.statusTime)}
          </Text>
        </Fragment>
      }
    </Fragment>
  );
}

export default withStyles(memo(OrderStatus, () => true), () => ({
  statusStyle: {
    ...textStyles.label,
    marginTop: sizes.margin / 2,
    color: '#000000',
    fontSize: 14,
  },
  requestsStyle: {
    ...textStyles.caption1,
    color: colors.gray3,
    fontSize: 14,
  }
}));
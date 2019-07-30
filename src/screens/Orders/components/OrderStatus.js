import React, { Fragment, memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';

import { textStyles, colors, sizes } from '../../../constants/theme';

import {
  addS, formatStatusTime
} from '../../../utils/formatters';

const statusTexts = {
  'requested'  : ['Requested', 'by'],
  'reserved'   : ['Reserved', 'to'],
  'onDelivery' : ['On Delivery', 'to'],
  'sold'       : ['Sold', 'to'],
}

function OrderStatus(props) {

  const { themedStyle, status, customerName, statusTime, requests } = props;

  return (
    <Fragment>
      <Text
        category='s2'
        style={[textStyles.label, themedStyle.statusStyle]}
      >
        {statusTexts[status][0]}
      </Text>
      {
        status === 'requested' &&
        <Text
          category='s2'
          style={[textStyles.caption1, themedStyle.requestsStyle]}
        >
          {`by ${requests} ${addS(requests, 'user')}`}
        </Text> 
      }
      {
        status !== 'requested' &&
        <Fragment>
          <Text
            category='s2'
            style={[textStyles.caption1, themedStyle.requestsStyle]}
          >
            {`to ${customerName}`}
          </Text>
          <Text
            category='s2'
            style={[textStyles.caption1, themedStyle.requestsStyle]}
          >
            {`${formatStatusTime(statusTime)}`}
          </Text>
        </Fragment>
      }
    </Fragment>
  );
}

export default withStyles(memo(OrderStatus), () => ({
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
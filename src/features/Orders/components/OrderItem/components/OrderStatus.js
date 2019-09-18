import React, { Fragment, memo } from 'react';
import { Text } from 'shared/components';
import { addS, formatStatusTime } from 'utils/formatters';

const statusTexts = {
  'requested': 'Requested',
  'reserved': 'Reserved',
  'onDelivery': 'On Delivery',
  'sold': 'Sold',
};

function OrderStatus({ status, reservation, requestCount }) {
  return (
    <Fragment>
      <Text label size={14} color='black1' marginBottom={0.25} marginTop={1}>
        {statusTexts[status]}
      </Text>
      {
        status === 'requested' &&
        <Text caption1 color='gray3' size={14}>
          {`by ${requestCount} ${addS(requestCount, 'customer')}`}
        </Text>
      }
      {
        status !== 'requested' &&
        <Fragment>
          <Text caption1 color='gray3' size={14}>
            {`to ${reservation.customerName}`}
          </Text>
          <Text caption1 color='gray3' size={14}>
            {formatStatusTime(reservation.statusTime)}
          </Text>
        </Fragment>
      }
    </Fragment>
  );
}

export default memo(OrderStatus, () => true);
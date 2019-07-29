import React, { Fragment, memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';

import { textStyles, colors, sizes } from '../../../constants/theme';

function OrderStatus(props) {

  const { themedStyle, status, customerName, statusTime, requests } = props;

  return (
    <Fragment>
      <Text
        category='s2'
        style={[textStyles.label, themedStyle.statusStyle]}
      >
        {'Reserved'}
      </Text>
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
        {`${statusTime}`}
      </Text>
    </Fragment>
  );
}

export default memo(withStyles(OrderStatus, () => ({
  statusStyle: {
    marginTop: sizes.margin / 2,
    color: '#000000',
    fontSize: 14,
  },
  requestsStyle: {
    color: colors.gray3,
    fontSize: 14,
  }
})), true);
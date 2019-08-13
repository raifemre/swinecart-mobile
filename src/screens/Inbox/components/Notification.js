import React, { memo } from 'react';

import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-ui-kitten'
import { withStyles } from 'react-native-ui-kitten/theme';

import { Block, Icon } from '../../../shared/components';

import { textStyles, colors, sizes } from '../../../constants/theme';

import NavigationService from '../../../services/navigation';
import { formatCreatedAt } from '../../../utils/formatters';

function Notification({ themedStyle, data }) {

  const { customerName, message, readAt, createdAt, type } = data;

  const onPressNotification = () => {
    if (type === 'BreederRated') {
      NavigationService.navigate('OrdersStack');
    }
    else if (type === 'ProductRequested') {
      NavigationService.navigate('DashboardStack');
    }
  };

  const contentStyle = [
    themedStyle.readAt,
    {
      color: readAt ? colors.gray5 : '#000000',
    }
  ];

  const messageStyle = [
    themedStyle.message,
    {
      color: readAt ? colors.gray5 : '#000000',
    }
  ];

  const customerNameStyle = [
    themedStyle.customerName,
    {
      color: readAt ? colors.gray5 : '#000000',
    }
  ];

  return (
    <TouchableOpacity
      activeOpacity={0.50}
      onPress={onPressNotification}
    >
      <Block row center padding style={themedStyle.container}>
        <Block flex={1}>
          <Text
            style={customerNameStyle}
          >
            {customerName}
          </Text>
          <Text
            style={messageStyle}
          >
            {message}
          </Text>
          <Text
            style={contentStyle}
            numberOfLines={1}
          >
            {formatCreatedAt(createdAt)}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );

}

export default withStyles(memo(Notification, () => true), () => ({
  container: {
    // height: 100,
    overflow: 'hidden',
    backgroundColor: colors.white1,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1
  },
  customerName: {
    ...textStyles.headline,
    fontSize: 16
  },
  message: {
    ...textStyles.subtitle,
    fontSize: 13
  },
  readAt: {
    ...textStyles.caption1,
    fontSize: 12
  }
}));
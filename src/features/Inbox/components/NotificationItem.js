import React, { memo } from 'react';
import { useStoreActions } from 'easy-peasy';
import { TouchableOpacity } from 'react-native';

import { Block, Icon, Text } from 'shared';

import { NavigationService } from 'services';
import { formatCreatedAt } from 'utils/formatters';
import { colors } from 'constants/theme';
import routes from 'constants/routes';

const iconNames = {
  'ProductRequested': 'alert-circle',
  'ProductReserved': 'alert-circle',
  'BreederRated': 'star',
};

const iconColors = {
  'ProductRequested': 'color-info-500',
  'ProductReserved': 'color-primary-500',
  'BreederRated': 'color-warning-500',
};

function Notification({ data }) {

  const { message, read_at, created_at, type } = data;

  const setCurrentStatus = useStoreActions(actions => actions.orders.setCurrentStatus);
  const setCurrentRoute = useStoreActions(actions => actions.dashboard.setCurrentRoute);

  const onPressNotification = () => {
    switch(type) {
      case 'ProductRequested': 
        setCurrentStatus(routes[0]);
        NavigationService.navigate('OrdersStack');
        break;
      case 'BreederRated': 
        setCurrentRoute('reviews');
        NavigationService.navigate('DashboardStack'); 
        break;
    }
  };

  const textColor = read_at ? 'gray5': 'black1';

  return (
    <TouchableOpacity
      activeOpacity={0.50}
      onPress={onPressNotification}
    >
      <Block
        row center padding={1}
        backgroundColor='white1'
        borderBottomWidth={1}
        borderBottomColor='gray1'
      > 
        {/* <Icon name={iconNames[type]} color={read_at ? 'gray5' : iconColors[type]} size={30}/> */}
        <Block flex={1} marginLeft={1}>
          <Text semibold size={13} numberOfLines={3} color={textColor}>
            {message}
          </Text>
          <Text normal size={12} color={textColor}>
            {formatCreatedAt(created_at)}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );

}

export default memo(Notification);
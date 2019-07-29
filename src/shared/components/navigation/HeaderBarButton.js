import React, { memo } from 'react';
import { TopNavigationAction } from 'react-native-ui-kitten';

import Icon from '../Icon';

function HeaderBarButton(props) {

  const { iconName, onPress } = props;

  const renderIcon = () => <Icon name={iconName} color='#ffffff' />

  return (
    <TopNavigationAction
      icon={renderIcon}
      onPress={onPress}
    />
  );

}

export default memo(HeaderBarButton);
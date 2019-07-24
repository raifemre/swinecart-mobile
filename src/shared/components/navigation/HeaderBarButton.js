import React, { memo } from 'react';
import {
  TopNavigationAction
} from 'react-native-ui-kitten';

import Icon from '../Icon';

function HeaderBarButton(props) {

  const { iconSource, onPress } = props;

  const renderIcon = () => <Icon source={iconSource} style={{ width: 24, height: 24 }} />

  return (
    <TopNavigationAction
      icon={renderIcon}
      onPress={onPress}
    />
  );

}

export default memo(HeaderBarButton);
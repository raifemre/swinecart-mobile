import React, { memo } from 'react';

import {
  TopNavigationAction
} from 'react-native-ui-kitten';

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import Icon from '../Icon';

function HeaderBarButton(props) {

  const { iconSource, onPress, themedStyle } = props;

  const renderIcon = () => <Icon source={iconSource} style={themedStyle.iconStyle} />

  return (
    <TopNavigationAction
      icon={renderIcon}
      onPress={onPress}
    />
  );

}

export default memo(withStyles(HeaderBarButton, () => ({
  iconStyle: {
    width: 24,
    height: 24,
    color: '#ffffff'
  }
})));
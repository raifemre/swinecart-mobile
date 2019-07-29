import React, { memo } from 'react';

import HeaderBarButton from './HeaderBarButton';

import NavigationService from '../../../services/navigation';

function SettingsButton() {

  const onPress = () => {
    NavigationService.navigate('Settings');
  }

  return (
    <HeaderBarButton
      iconName='settings'
      onPress={onPress}
    />
  );

}

export default memo(SettingsButton);
import React, { memo } from 'react';

import SettingsIcons from '../../../assets/icons/settings.png';

import HeaderBarButton from './HeaderBarButton';

import NavigationService from '../../../services/navigation';

function SettingsButton() {

  const onPress = () => {
    NavigationService.navigate('Settings');
  }

  return (
    <HeaderBarButton
      iconSource={SettingsIcons}
      onPress={onPress}
    />
  );

}

export default memo(SettingsButton);
import React, { memo } from 'react';

import SettingsIcons from '../../../assets/icons/settings.png';

import HeaderBarButton from './HeaderBarButton';

function SettingsButton() {

  const onPress = () => {
    alert('Settings Button');
  }

  return (
    <HeaderBarButton
      iconSource={SettingsIcons}
      onPress={onPress}
    />
  );

}

export default memo(SettingsButton);
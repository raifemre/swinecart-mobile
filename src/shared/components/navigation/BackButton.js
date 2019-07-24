import React, { memo } from 'react';

import BackIcon from '../../../assets/icons/back.png';

import HeaderBarButton from './HeaderBarButton';

import NavigationService from '../../../services/navigation';

function BackButton() {

  const onPress = () => {
    NavigationService.back();
  }

  return (
    <HeaderBarButton
      iconSource={BackIcon}
      onPress={onPress}
    />
  );

}

export default memo(BackButton);
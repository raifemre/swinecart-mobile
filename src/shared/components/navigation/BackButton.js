import React, { memo } from 'react';

import HeaderBarButton from './HeaderBarButton';

import NavigationService from '../../../services/navigation';

function BackButton({ iconName = 'chevron-left' }) {

  const onPress = () => {
    NavigationService.back();
  }

  return (
    <HeaderBarButton
      iconName={iconName}
      onPress={onPress}
    />
  );

}

export default memo(BackButton, () => true);
import React, { memo } from 'react';

import HeaderBarButton from './HeaderBarButton';

import NavigationService from '../../../services/navigation';

function BackButton() {

  const onPress = () => {
    NavigationService.back();
  }

  return (
    <HeaderBarButton
      iconName='chevron-left'
      onPress={onPress}
    />
  );

}

export default memo(BackButton);
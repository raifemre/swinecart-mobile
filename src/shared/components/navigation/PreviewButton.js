import React, { memo } from 'react';

import HeaderBarButton from './HeaderBarButton';

import NavigationService from '../../../services/navigation';

function PreviewButton() {

  const onPress = () => {
    NavigationService.navigate('ProductDetails');
  };

  return (
    <HeaderBarButton
      iconName='eye'
      onPress={onPress}
    />
  );

}

export default memo(PreviewButton, () => true);
import React, { memo } from 'react';

import HeaderBarButton from './HeaderBarButton';

import NavigationService from '../../../services/navigation';

function AddProductButton() {

  const onPress = () => {
    NavigationService.navigate('AddProduct');
  };

  return (
    <HeaderBarButton
      iconName='plus'
      onPress={onPress}
    />
  );

}

export default memo(AddProductButton, () => true);
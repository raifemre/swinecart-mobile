import React, { memo } from 'react';

import HeaderBarButton from './HeaderBarButton';

import NavigationService from '../../../services/navigation';

function EditProductButton() {

  const onPress = () => {
    NavigationService.navigate('AddProduct');
  };

  return (
    <HeaderBarButton
      iconName='edit'
      onPress={onPress}
    />
  );

}

export default memo(EditProductButton, () => true);
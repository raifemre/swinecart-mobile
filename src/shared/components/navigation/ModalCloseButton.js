import React, { memo } from 'react';

import HeaderBarButton from './HeaderBarButton';

function ModalCloseButton({ onPress }) {
  return (
    <HeaderBarButton
      iconName='x'
      onPress={onPress}
    />
  );

}

export default memo(ModalCloseButton, () => true);
import React, { memo } from 'react';

import HeaderBarButton from './HeaderBarButton';

function PreviewButton() {

  const onPress = () => {
    alert('Preview Button');
  };

  return (
    <HeaderBarButton
      iconName='eye'
      onPress={onPress}
    />
  );

}

export default memo(PreviewButton, () => true);
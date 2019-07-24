import React, { memo } from 'react';

import BackIcon from '../../../assets/icons/back.png';

import HeaderBarButton from './HeaderBarButton';

function BackButton() {

  const onPress = () => {
    alert('Back Button');
  }

  return (
    <HeaderBarButton
      iconSource={BackIcon}
      onPress={onPress}
    />
  );

}

export default memo(BackButton);
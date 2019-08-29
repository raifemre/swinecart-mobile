import React, { memo } from 'react';

import { withStyles } from 'react-native-ui-kitten/theme';

import { Avatar } from 'react-native-ui-kitten';

import { colors } from 'constants/theme'

function ProductAvatar(props) {

  const { themedStyle, image } = props;

  return (
    <Avatar
      shape='round'
      source={{ uri: image }}
      style={themedStyle.imageStyle}
    />
  );
}

export default withStyles(memo(ProductAvatar, () => true), () => ({
  imageStyle: {
    width: 96,
    height: 96,
    borderWidth: 1,
    borderColor: colors.gray2
  },
}));
import React, { memo } from 'react';

import { TouchableOpacity, Image } from 'react-native';
import { withStyles } from 'react-native-ui-kitten/theme';
import { colors } from '../../../../../constants/theme';

function ProductImage({ themedStyle, imageUrl, onPressView }) {
  return (
    <TouchableOpacity
      style={themedStyle.imageContainer}
      activeOpacity={0.50}
      onPress={onPressView}
    >
      <Image
        style={themedStyle.image}
        source={{ uri: imageUrl }}
        resizeMode='cover'
      />
    </TouchableOpacity>
  );
}

export default withStyles(memo(ProductImage, () => true), () => ({
  imageContainer: {
    backgroundColor: colors.gray2,
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: 150,
  }
}));
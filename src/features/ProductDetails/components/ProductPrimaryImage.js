import React, { memo } from 'react';
import { Image } from 'react-native';
import { withStyles } from 'react-native-ui-kitten/theme';
import { sizes, colors } from '../../../constants/theme';
import { Block } from '../../../shared/components';

function ProductPrimaryImage({ themedStyle, photoURL }) {

  const source = { 
    uri: photoURL 
  };

  return (
    <Block row flex='disabled' center middle style={themedStyle.imageContainerStyle}>
      <Image
        style={themedStyle.imageStyle}
        source={source}
        resizeMode='contain'
      />
    </Block>
  );
}


export default withStyles(memo(ProductPrimaryImage, () => true), () => ({
  imageStyle: {
    flex: 1,
    width: null,
    height: 300
  },
  imageContainerStyle: {
    width: '100%',
    height: 332,
    backgroundColor: colors.gray2,
  },
}));
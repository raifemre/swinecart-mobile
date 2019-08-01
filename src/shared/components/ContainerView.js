import React, { memo } from 'react';
import { ScrollView } from 'react-native';

import { withStyles } from 'react-native-ui-kitten/theme';

import { colors, sizes } from '../../constants/theme';

function ContainerView(props) {

  const { themedStyle, backgroundColor = colors.gray2, contentContainerStyle, ...restProps } = props;

  return (
    <ScrollView
      contentContainerStyle={[themedStyle.contentContainer, contentContainerStyle]}
      style={[themedStyle.container, { backgroundColor },]}
      bounces={false}
      bouncesZoom={false}
      bounces={false}
      bouncesZoom={false}
      alwaysBounceVertical={false}
      alwaysBounceHorizontal={false}
      // showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...restProps}
    />
  )

}

export default memo(withStyles(ContainerView, () => ({
  container: {
    flex: 1
  },
  contentContainer: {
    paddingBottom: sizes.padding,
  }
})));
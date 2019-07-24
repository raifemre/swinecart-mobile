import React from 'react';
import { ScrollView } from 'react-native';

import { withStyles } from 'react-native-ui-kitten/theme';

import { colors } from '../../constants/theme';

function ContainerView(props) {

  const { themedStyle, backgroundColor = colors.gray2, ...restProps } = props;

  return (
    <ScrollView
      style={[themedStyle.container, { backgroundColor }]}
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

export default withStyles(ContainerView, () => ({
  container: {
    flex: 1,
  }
}));
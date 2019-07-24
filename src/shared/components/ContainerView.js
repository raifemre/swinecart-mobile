import React from 'react';
import { ScrollView } from 'react-native';

import { withStyles } from 'react-native-ui-kitten/theme';

import { colors } from '../../constants/theme';

function ContainerView(props) {

  return (
    <ScrollView
      style={props.themedStyle.container}
      bounces={false}
      bouncesZoom={false}
      bounces={false}
      bouncesZoom={false}
      alwaysBounceVertical={false}
      alwaysBounceHorizontal={false}
      // showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...props}
    />
  )

}

export default withStyles(ContainerView, () => ({
  container: {
    flex: 1,
    backgroundColor: colors.gray2,
  }
}));
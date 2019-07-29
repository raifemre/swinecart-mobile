import React, { memo } from 'react';

import {
  TopNavigation
} from 'react-native-ui-kitten';

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import { textStyles, shadowStyles } from '../../../constants/theme';

function HeaderBar(props) {

  const { 
    title, hasShadow = false, leftControl = null, rightControls = null,
    themedStyle
  } = props;


  const headerBarStyle = [
    themedStyle.headerBar,
    hasShadow && shadowStyles.shadow1,
  ];

  return (
    <TopNavigation
      style={headerBarStyle}
      title={title}
      titleStyle={[textStyles.headline, themedStyle.titleStyle]}
      alignment='center'
      leftControl={leftControl}
      rightControls={rightControls}
    />
  )

}

export default memo(withStyles(HeaderBar, theme => ({
  headerBar: {
    backgroundColor: theme['color-primary-500'],
  },
  titleStyle: {
    color: '#ffffff'
  }
})));
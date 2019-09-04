import React, { Fragment, memo } from 'react';
import {
  TopNavigation
} from 'react-native-ui-kitten';

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import { colors, textStyles, shadowStyles } from 'constants/theme';

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
    <Fragment>
      
      <TopNavigation
        style={headerBarStyle}
        title={title}
        titleStyle={themedStyle.titleStyle}
        alignment='center'
        leftControl={leftControl}
        rightControls={rightControls}
      />
    </Fragment>
  )

}

export default withStyles(memo(HeaderBar, () => true), theme => ({
  headerBar: {
    backgroundColor: theme['color-primary-500'],
  },
  titleStyle: {
    ...textStyles.headline,
    color: colors.white1
  },
  statusBar: {
    backgroundColor: theme['color-primary-100'],
  }
}));
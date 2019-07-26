import React, { memo } from 'react';
import {
  TopNavigation
} from 'react-native-ui-kitten';

import { textStyles, shadowStyles } from '../../../constants/theme';

function HeaderBar(props) {

  const { 
    title, hasShadow = false, leftControl = null, rightControls = null 
  } = props;


  const headerBarStyle = [
    hasShadow && shadowStyles.shadow1,
  ];

  return (
    <TopNavigation
      style={headerBarStyle}
      title={title}
      titleStyle={textStyles.headline}
      alignment='center'
      leftControl={leftControl}
      rightControls={rightControls}
    />
  )

}

export default memo(HeaderBar);
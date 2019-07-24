import React, { memo } from 'react';
import {
  TopNavigation
} from 'react-native-ui-kitten';

import { textStyles } from '../../../constants/theme';

function HeaderBar(props) {

  const { title, leftControl = null, rightControls = null } = props;

  return (
    <TopNavigation
      title={title}
      titleStyle={textStyles.headline}
      alignment='center'
      leftControl={leftControl}
      rightControls={rightControls}
    />
  )

}

export default memo(HeaderBar);
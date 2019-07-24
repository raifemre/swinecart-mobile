import React, { memo } from 'react';
import {
  TopNavigation
} from 'react-native-ui-kitten';


import BackButton from './BackButton';

import { textStyles } from '../../../constants/theme';

function HeaderBar(props) {

  const { title } = props;

  return (
    <TopNavigation
      title={title}
      titleStyle={textStyles.headline}
      alignment='center'
      leftControl={BackButton}
    // rightControls={this.renderRightControls()}
    />
  ) 

}

export default memo(HeaderBar);
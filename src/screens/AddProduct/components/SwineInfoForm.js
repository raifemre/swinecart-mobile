import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';

import {
  Block
} from '../../../shared/components'

function SwineInfoForm() {

  return (
    <Block padding center middle>
      <Text>SwineInfoForm</Text>
    </Block>
  );
}

export default withStyles(memo(SwineInfoForm), () => ({
}));
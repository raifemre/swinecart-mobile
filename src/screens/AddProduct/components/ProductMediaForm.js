import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';

import {
  Block
} from '../../../shared/components'

function ProductMediaForm() {

  return (
    <Block padding center middle>
      <Text>ProductMediaForm</Text>
    </Block>
  );
}

export default withStyles(memo(ProductMediaForm), () => ({
}));
import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text, CheckBox } from 'react-native-ui-kitten';

import {
  Block, Input
} from '../../../shared/components'

function ProductInfoForm() {
  return (
    <Block padding>
      <Input label='Name' />
      <Input label='Type' />
      <Input label='Minimum' />
      <Input label='Maximum' />
      <CheckBox text='Yes, this product is unique' />
      <Input label='Quantity' />
    </Block>
  );
}

export default withStyles(memo(ProductInfoForm), () => ({
}));
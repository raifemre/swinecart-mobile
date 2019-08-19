import React, { Fragment, memo } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from 'react-native-ui-kitten/theme';
import { CheckBox } from 'react-native-ui-kitten';

import {
  Block, Input
} from '../../../shared/components'

import FormFooter from './FormFooter';

function ProductInfoForm({ onPressBack, onPressNext, isFirstStep, isLastStep }) {
  return (
    <Block flex={1}>
      <Block flex={1} middle padding>
        <Field
          name='name'
          label='Name'
          component={Input}
        />
        <Input label='Type' />
        <Input label='Minimum' />
        <Input label='Maximum' />
        <CheckBox text='Yes, this product is unique' />
        <Input label='Quantity' />
      </Block>
      <FormFooter
        onPressNext={onPressNext}
        onPressBack={onPressBack}
        isLastStep={isFirstStep}
        isFirstStep={isLastStep}
      />
    </Block>
  );
}

export default reduxForm({ form: 'productInfo' })(withStyles(memo(ProductInfoForm), () => ({
})));
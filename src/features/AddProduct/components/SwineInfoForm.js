import React, { Fragment, memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text, CheckBox, Radio, RadioGroup } from 'react-native-ui-kitten';

import {
  Block, Input
} from '../../../shared/components'

import FormFooter from './FormFooter';

function SwineInfoForm({ onPressBack, onPressNext, isFirstStep, isLastStep }) {
  return (
    <Fragment>
      <Block padding>
        <RadioGroup>
          <Radio text='Pure Breed' />
          <Radio text='Cross Breed' />
        </RadioGroup>
        <Input label='Breed' />
        <Input label='Birth Date' />
        <Input label='Birth Weight' />
        <Input label='Farm From' />
        <RadioGroup>
          <Radio text='Tunnel Ventilated' />
          <Radio text='Open Sided' />
        </RadioGroup>
        <Input label='Average Daily Gain (grams)' />
        <Input label='Feed Conversion Ratio' />
        <Input label='Backfat Thickness (mm)' />
        <Input label='Litter Size Born Alive' />
      </Block>
      <FormFooter
        onPressNext={onPressNext}
        onPressBack={onPressBack}
        isLastStep={isFirstStep}
        isFirstStep={isLastStep}
      />
    </Fragment>
  );
}

export default withStyles(memo(SwineInfoForm), () => ({
}));  
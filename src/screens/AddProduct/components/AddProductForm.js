import React, { memo, useState } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';

import { Button } from 'react-native-ui-kitten';

import { NavigationService } from '../../../services';
import { Block } from '../../../shared/components'

import { 
  textStyles, sizes
} from '../../../constants/theme';

import FormStepIndicator from './FormStepIndicator';
import Wizard from './Wizard';
import ProductInfoForm from './ProductInfoForm';
import SwineInfoForm from './SwineInfoForm';
import ProductMediaForm from './ProductMediaForm';

const labels = ['Product Information', 'Swine Information', 'Product Media'];
const steps = [
  {
    component: ProductInfoForm
  },
  {
    component: SwineInfoForm
  },
  {
    component: ProductMediaForm
  },
];

function AddProductForm({ themedStyle }) {

  const [ currentStep, setCurrentStep ] = useState(0);
  const [ wizardRef, setWizardRef ] = useState(null);

  const onPressBack = () => {
    if (!isFirstStep()) {
      wizardRef && wizardRef.prev();
    }
  };

  const onPressFinish = () => {
    NavigationService.back();
  };

  const onPressNext = () => {
    if (isLastStep()) {
      onPressFinish();
    }
    else {
      wizardRef && wizardRef.next();
    }
  };

  const isLastStep = () => {
    return currentStep === 2;
  };

  const isFirstStep = () => {
    return currentStep === 0;
  }

  return (
    <Block flex={1}>
      <Block flex='disabled' padding left>
        <FormStepIndicator labels={labels} currentStep={currentStep} />
      </Block>
      <Wizard
        steps={steps}
        setWizardRef={setWizardRef}
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
      <Block row flex='disabled' right style={themedStyle.footerStyle}>
        <Block style={themedStyle.prevButtonContainerStyle}>
          <Button
            size='large'
            appearance='outline'
            style={themedStyle.buttonStyle}
            textStyle={themedStyle.buttonTextStyle}
            onPress={onPressBack}
            >
              Back
          </Button>
        </Block>
        <Block style={themedStyle.nextButtonContainerStyle}>
          <Button
            size='large'
            style={themedStyle.buttonStyle}
            textStyle={themedStyle.buttonTextStyle}
            onPress={onPressNext}
          >
            { isLastStep() ? 'Finish' : 'Next' }
          </Button>
        </Block>
      </Block> 
    </Block>

  );
}

export default withStyles(memo(AddProductForm), () => ({
  buttonStyle: {
    borderWidth: 0
  },
  prevButtonContainerStyle: {
    paddingRight: sizes.padding / 4
  },
  nextButtonContainerStyle: {
    paddingLeft: sizes.padding / 4
  },
  buttonTextStyle: {
    ...textStyles.button
  },
  footerStyle: {
    padding: sizes.padding / 2,
  }
}));
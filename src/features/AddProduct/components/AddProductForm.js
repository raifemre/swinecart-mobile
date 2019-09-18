import React, { memo, useState } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';

import { Button } from 'react-native-ui-kitten';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import { NavigationService } from '../../../services';
import { Block, ContainerView } from '../../../shared/components'

import { 
  textStyles, sizes, colors, shadowStyles
} from '../../../constants/theme';

import Wizard from './Wizard';
import ProductInfoForm from './ProductInfoForm';
import SwineInfoForm from './SwineInfoForm';
import ProductMediaForm from './ProductMediaForm';
import FormFooter from './FormFooter';

const labels = ['Product Information', 'Swine Information', 'Product Media'];

function AddProductForm({ themedStyle }) {

  const [ currentStep, setCurrentStep ] = useState(0);
  const [ wizardRef, setWizardRef ] = useState(null);

  const onPressBack = () => {
    if (isFirstStep()) {
      NavigationService.back();
    }
    else {
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
  };

  const steps = [
    {
      component: () => (
        <ProductInfoForm
          onPressNext={onPressNext}
          onPressBack={onPressBack}
          isLastStep={isLastStep}
          isFirstStep={isLastStep}
        />
      )
    },
    {
      component: () => (
        <SwineInfoForm
          onPressNext={onPressNext}
          onPressBack={onPressBack}
          isLastStep={isLastStep}
          isFirstStep={isLastStep}
        />
      )
    },
    {
      component: ProductMediaForm
    },
  ];

  return (
    <Block flex={1}>
      <ContainerView backgroundColor={colors.white1} style={{ height: '100%' }}>
        <Wizard
          steps={steps}
          setWizardRef={setWizardRef}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      </ContainerView>
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
  header: {
    ...shadowStyles.shadow1
  }
}));
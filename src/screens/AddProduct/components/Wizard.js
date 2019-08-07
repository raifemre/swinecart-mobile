import React, { memo } from 'react';
import clamp from 'lodash/clamp';
import RNWizard from 'react-native-wizard';

import SwineInfoForm from './SwineInfoForm';
import ProductInfoForm from './ProductInfoForm';
import ProductMediaForm from './ProductMediaForm';

function Wizard({ setWizardRef, setCurrentStep, currentStep }) {

  const steps = [
    {  
      component: SwineInfoForm
    },
    {
      component: ProductInfoForm
    },
    {
      component: ProductMediaForm
    },
  ];

  const onCurrentStep = currentIndex => {
    setCurrentStep(clamp(currentIndex, 0, steps.length - 1));
  };

  return (
    <RNWizard
      activeStep={currentStep}
      ref={setWizardRef}
      currentStep={onCurrentStep}
      duration={200}
      steps={steps}
    />
  );
}

export default memo(Wizard);
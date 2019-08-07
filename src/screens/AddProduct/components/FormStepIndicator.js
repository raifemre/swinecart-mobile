import React, { Fragment, memo, useState } from 'react';

import StepIndicator from 'react-native-step-indicator';
import { withStyles } from 'react-native-ui-kitten/theme';
import { colors, textStyles } from '../../../constants/theme';

function FormStepIndicator({ currentStep, themedStyle }) {

  const labels = ['Swine Information', 'Product Information', 'Product Media'];

  return (
    <StepIndicator 
      labels={labels}
      direction='horizontal'
      stepCount={3}
      currentPosition={currentStep}
      customStyles={themedStyle.stepStyle}
    />
  );
}

export default withStyles(memo(FormStepIndicator), () => ({
  stepStyle: {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 35,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 4,
    stepStrokeCurrentColor: colors.primary,
    separatorFinishedColor: colors.primary,
    separatorUnFinishedColor: colors.gray3,
    stepIndicatorFinishedColor: colors.primary,
    stepIndicatorUnFinishedColor: colors.gray3,
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 14,
    currentStepIndicatorLabelFontSize: 14,
    stepIndicatorLabelCurrentColor: colors.gray3,
    stepIndicatorLabelFinishedColor: colors.white1,
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: colors.gray3,
    labelSize: 14,
    currentStepLabelColor: colors.primary,
  }
}));
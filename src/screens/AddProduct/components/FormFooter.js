import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';

import { Button } from 'react-native-ui-kitten';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import { Block } from '../../../shared/components'

import {
  textStyles, sizes, colors, shadowStyles
} from '../../../constants/theme';

function FormFooter({ themedStyle, onPressBack, onPressNext, isFirstStep, isLastStep }) {
  return (
    <HideWithKeyboard>
      <Block row flex='disabled' right style={themedStyle.footerStyle}>
        <Block style={themedStyle.prevButtonContainerStyle}>
          <Button
            size='large'
            appearance='ghost'
            style={themedStyle.buttonStyle}
            textStyle={themedStyle.buttonTextStyle}
            onPress={onPressBack}
          >
            {isFirstStep() ? 'Cancel' : 'Back'}
          </Button>
        </Block>
        <Block style={themedStyle.nextButtonContainerStyle}>
          <Button
            size='large'
            style={themedStyle.buttonStyle}
            textStyle={themedStyle.buttonTextStyle}
            onPress={onPressNext}
          >
            {isLastStep() ? 'Finish' : 'Next'}
          </Button>
        </Block>
      </Block>
    </HideWithKeyboard>

  );
}

export default withStyles(memo(FormFooter), () => ({
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
  },
  footerStyle: {
    ...shadowStyles.shadow1,
    padding: sizes.padding / 2,
    backgroundColor: colors.gray2,
  }
}));
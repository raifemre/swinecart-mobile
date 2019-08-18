import React, { memo } from 'react';

import { Text } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';

import Block from './Block'

import { colors, textStyles } from '../../constants/theme';

function LoadingView({ themedStyle, loadingText = 'Loading...' }) {
  return (
    <Block flex={1} center middle style={themedStyle.containerStyle}>
      <Text style={themedStyle.messageTextStyle}>
        {loadingText}
      </Text>
    </Block>
  );
}

export default withStyles(memo(LoadingView, () => true), () => ({
  containerStyle: {
    backgroundColor: '#ffffff',
  },
  messageTextStyle: {
    ...textStyles.headline,
    color: colors.gray4
  }
}));
import React, { Fragment, memo } from 'react';

import { Button } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';

import Block from './Block'

import { colors, textStyles } from '../../constants/theme';

function ListFooter({ isLoadingMore, themedStyle, onPressLoadMore }) {
  return (
    <Fragment>
      <Block flex={1} padding center middle style={themedStyle.containerStyle}>
        <Button
          disabled={isLoadingMore}
          onPress={onPressLoadMore}
          textStyle={themedStyle.buttonText}
          style={themedStyle.button}
        >
          {isLoadingMore ? 'Loading...' : 'Load More'}
        </Button>
      </Block>
    </Fragment>
  );
}

export default withStyles(memo(ListFooter, () => true), () => ({
  containerStyle: {
    backgroundColor: colors.gray2,
  },
  messageTextStyle: {
    ...textStyles.headline,
    color: colors.gray4
  },
  buttonText: {
    ...textStyles.button,
  },
  button: {
    width: 150,
    borderWidth: 0
  }
}));
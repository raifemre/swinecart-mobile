import React, { Fragment, memo } from 'react';

import { Text } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';

import Block from './Block'

import { colors, textStyles } from '../../constants/theme';

function ListFooter({ isRefreshing, themedStyle }) {
  return (
    <Fragment>
      {
        isRefreshing && <Block flex={1} padding center middle style={themedStyle.containerStyle}>
          <Text style={themedStyle.messageTextStyle}>
            Loading...
          </Text>
        </Block>
      }
      {!isRefreshing && null}
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
  }
}));
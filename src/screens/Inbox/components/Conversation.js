import React, { Fragment, memo } from 'react';

import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-ui-kitten'
import { withStyles } from 'react-native-ui-kitten/theme';

import { Block } from '../../../shared/components';

import { sizes, textStyles, colors } from '../../../constants/theme';
import { formatMessageDate } from '../../../utils/formatters';

function Conversation({ themedStyle, data }) {

  const { message, userName, createdAt } = data;

  const onPressConversation = () => {

  }
    

  return (
    null
  );

}

export default withStyles(memo(Conversation),  () => ({
}));
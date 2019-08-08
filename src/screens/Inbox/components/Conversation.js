import React, { memo } from 'react';

import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-ui-kitten'
import { withStyles } from 'react-native-ui-kitten/theme';

import { Block, UserAvatar } from '../../../shared/components';

import { textStyles, colors } from '../../../constants/theme';
import { formatMessageDate } from '../../../utils/formatters';

function Conversation({ themedStyle, data }) {

  const { message, userName, createdAt } = data;

  const onPressConversation = () => {

  };
    

  return (
    <TouchableOpacity
      activeOpacity={0.50}
      onPress={onPressConversation}
    >
      <Block row center padding style={themedStyle.container}>
        <UserAvatar userName={userName} size={48} textSize={18} />
        <Block flex={1} paddingHorizontal>
          <Text
            style={themedStyle.userName}
            numberOfLines={1}
          >
            {userName}
          </Text>
          <Text
            style={themedStyle.message}
            numberOfLines={1}
          >
            {message}
          </Text>
        </Block>
        <Text
          style={themedStyle.createdAt}
          numberOfLines={1}
        >
          {formatMessageDate(createdAt)}
        </Text>
      </Block>
    </TouchableOpacity>
  );

}

export default withStyles(memo(Conversation, () => true), () => ({
  container: {
    height: 80,
    overflow: 'hidden',
    backgroundColor: colors.white1,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1
  },
  userName: {
    ...textStyles.subtitle,
    color: '#000000',
    fontSize: 16
  },
  message: {
    ...textStyles.caption1,
    color: colors.gray3,
    fontSize: 13
  },
  createdAt: {
    ...textStyles.caption1,
    color: colors.gray3,
    fontSize: 12
  }
}));
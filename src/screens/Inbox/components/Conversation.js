import React, { memo } from 'react';

import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-ui-kitten'
import { withStyles } from 'react-native-ui-kitten/theme';

import { Block, UserAvatar } from '../../../shared/components';

import { textStyles, colors, sizes } from '../../../constants/theme';
import { formatMessageDate } from '../../../utils/formatters';

import NavigationService from '../../../services/navigation';

function Conversation({ themedStyle, data }) {

  const { message, user } = data;

  const { userName } = user;
  const { content, createdAt, readAt } = message;

  const onPressConversation = () => {
    NavigationService.navigate('Chat', { user });
  };
    
  const contentStyle = [
    themedStyle.content,
    {
      color: readAt ? colors.gray3 : '#000000',
    }
  ];

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
            style={contentStyle}
            numberOfLines={1}
          >
            {content}
          </Text>
        </Block>
        <Text
          style={themedStyle.createdAt}
          numberOfLines={1}
        >
          {formatMessageDate(createdAt)}
        </Text>
        { !readAt && <Block flex='disabled' style={themedStyle.indicator}></Block> }
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
  content: {
    ...textStyles.subtitle,
    fontSize: 13
  },
  createdAt: {
    ...textStyles.caption1,
    color: colors.gray3,
    fontSize: 12
  },
  indicator: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: colors.primary,
    marginLeft: sizes.margin / 2,
  }
}));
import React, { useState, memo, useEffect } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { GiftedChat, Send, InputToolbar, Composer, Bubble, Actions, MessageText } from 'react-native-gifted-chat';

import { 
  LoadingView, UserAvatar, Icon, Block
} from '../../../shared/components';

import { sizes, colors, textStyles } from '../../../constants/theme';

function Chat({ themedStyle, user }) {

  const [ messages, setMessages ] = useState(null);

  useEffect(() => {
  }, []);

  const renderLoading = () => <LoadingView />;
  const renderAvatar = () => <UserAvatar userName={user.userName} size={36} textSize={14} />;
  const renderSend = props => (
    <Send 
      {...props}
      containerStyle={themedStyle.sendContainer}
    >
      <Block flex='disabled' middle style={themedStyle.sendIconContainer}>
        <Icon name='send' color={colors.primary} size={26} />
      </Block>
    </Send>
  );

  const renderInputToolbar = props => (
    <InputToolbar
      {...props}
      containerStyle={themedStyle.inputToolbarContainer}
    />
  );

  const renderComposer = props => (
    <Composer
      {...props}
      textInputStyle={themedStyle.textInput}
    />
  );

  const renderBubble = props => (
    <Bubble 
      {...props}
      wrapperStyle={themedStyle.bubbleWrapperStyle}
    />
  );

  const renderMessageText = props => (
    <MessageText
      {...props}
      customTextStyle={themedStyle.customTextStyle}
    />
  );

  const renderActions = props => (
    <Actions
      {...props}
      icon={() => <Icon name='plus' color={colors.primary} size={26} />}
    />
  );

  return (
    <GiftedChat
      messages={messages}
      user={{ _id: 1 }}
      alwaysShowSend={true}
      renderLoading={renderLoading}
      renderAvatar={renderAvatar}
      renderInputToolbar={renderInputToolbar}
      renderSend={renderSend}
      renderComposer={renderComposer}
      renderBubble={renderBubble}
      renderActions={renderActions}
      renderMessageText={renderMessageText}
    />
  );

}

export default withStyles(memo(Chat), () => ({
  sendIconContainer: {
    margin: 0
  },
  customTextStyle: {
    ...textStyles.caption1,
    fontSize: 15
  },
  sendContainer: {
    justifyContent: 'center',
    height: 45,
    padding: sizes.padding / 2,
    paddingHorizontal: sizes.padding,
  },
  textInput: {
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingHorizontal: sizes.padding,
    ...textStyles.caption1,
  },
  bubbleWrapperStyle: {
    left: {
      backgroundColor: colors.gray1,
    },
    right: {
      backgroundColor: colors.primary
    }
  },
  inputToolbarContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.gray2,
  }
}));
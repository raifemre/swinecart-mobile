import React, { memo } from 'react';
import { Text } from 'react-native-ui-kitten'
import { withStyles } from 'react-native-ui-kitten/theme';

import Block from './Block';

import { textStyles, colors } from '../../constants/theme';
import { getInitials } from '../../utils/helpers';

function UserAvatar({ themedStyle, userName, size = 64, textSize = 24 }) {

  const avatarStyle = [
    themedStyle.avatarStyle, 
    {
      width: size,
      height: size,
      borderRadius: size / 2,
    }
  ]

  const avatarTextStyle = [
    themedStyle.avatarTextStyle,
    {
      fontSize: textSize,
      lineHeight: textSize * 1.2,
    }
  ];

  return (
    <Block center middle flex='disabled' style={avatarStyle}>
      <Text
        style={avatarTextStyle}
      >
        {getInitials(userName)}
      </Text>
    </Block>
  );

}

export default withStyles(memo(UserAvatar, () => true), () => ({
  avatarStyle: {
    borderWidth: 1,
    borderColor: colors.gray1,
    backgroundColor: colors.primary,
  },
  avatarTextStyle: {
    ...textStyles.caption1,
    alignSelf: 'center',
    justifyContent: 'center',
    color: colors.white1
  },
}));
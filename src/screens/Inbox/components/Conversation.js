import React, { PureComponent } from 'react';

import { 
  TouchableOpacity, View
} from 'react-native';

import {
  Text
} from 'react-native-ui-kitten'

import {
  withStyles
} from 'react-native-ui-kitten/theme';


import { textStyles, colors } from '../../../constants/theme';


class Conversation extends PureComponent {

  onPressConversation = () => {
    // alert('yow');
  }

  render() {

    const { themedStyle, style } = this.props;

    return (
      <TouchableOpacity
        style={[themedStyle.container, style]}
        onPress={this.onPressConversation}>
        <View style={themedStyle.leftSection}>
          <View style={themedStyle.messageContainer}>
            <Text
              style={themedStyle.userLabel}
              category='s2'>
              {'Gio Peralta'}
            </Text>
            <Text
              style={themedStyle.lastMessageLabel}
              appearance='hint'
              category='c1'
              adjustsFontSizeToFit={true}>
              {'Hellooooooooooooooooooooooooooooooooooo'}
            </Text>
          </View>
        </View>
        <View style={themedStyle.rightSection}>
          <Text
            style={themedStyle.dateLabel}
            appearance='hint'
            category='p2'>
            {'4:22 PM'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

}

export default withStyles(Conversation,  () => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray2
  },
  messageContainer: {
    // flex: 1,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 16,
  },
  userLabel: textStyles.subtitle,
  lastMessageLabel: textStyles.caption1,
  dateLabel: textStyles.paragraph,
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));
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


class Notification extends PureComponent {

  onPressNotification = () => {
    // alert('yow');
  }

  render() {

    const { themedStyle, style } = this.props;

    return (
      <TouchableOpacity
        style={[themedStyle.container, style]}
        onPress={this.onPressNotification}>
        <View style={themedStyle.leftSection}>
          <View style={themedStyle.messageContainer}>
            <Text
              style={themedStyle.userLabel}
              category='s2'
              adjustsFontSizeToFit={true}
            >
              {'Customer Cecile Carter rated you with 5 (overall average).'}
            </Text>
            <Text
              style={themedStyle.lastMessageLabel}
              appearance='hint'
              category='c1'
            >
              {'20 hours ago'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

}

export default withStyles(Notification, () => ({
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
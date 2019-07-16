import React, { PureComponent } from 'react';

import {
  TouchableOpacity, View
} from 'react-native';

import {
  Text, Button
} from 'react-native-ui-kitten'

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import NavigationService from '../../../services/navigation';

import { textStyles, colors, sizes } from '../../../constants/theme';


class Request extends PureComponent {

  onPressReserve = () => {
    NavigationService.back();
  }

  onPressMessage = () => {

  }

  render() {

    const { themedStyle, style } = this.props;

    return (
      <TouchableOpacity
        style={[themedStyle.container, style]}
        // onPress={this.onPressReserve}
      >
        <View style={themedStyle.leftSection}>
          <View style={themedStyle.messageContainer}>
            <Text
              style={themedStyle.userLabel}
              category='s1'
              adjustsFontSizeToFit={true}
            >
              {'Cecil Carter'}
            </Text>
            <Text
              style={themedStyle.userLabel}
              category='s2'
              adjustsFontSizeToFit={true}
            >
              {'Batangas'}
            </Text>
          </View>
        </View>
        <View style={themedStyle.priceContainer}>
          <Button
            size='tiny'
            style={[themedStyle.buttonStyle, { marginBottom: sizes.margin / 2, }]}
            textStyle={[themedStyle.buttonText, textStyles.button]}
            onPress={this.onPressReserve}
          >
            Reserve
            </Button>
          <Button
            size='tiny'
            appearance='outline'
            style={themedStyle.buttonStyle}
            textStyle={[themedStyle.buttonText, textStyles.button]}
            onPress={this.onPressMessage}
          >
            Message
            </Button>
        </View>
      </TouchableOpacity>
    );
  }

}

export default withStyles(Request, () => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray2
  },
  priceContainer: {
    alignItems: 'center',
    marginTop: sizes.padding / 2,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
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
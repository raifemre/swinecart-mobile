import React, { PureComponent } from 'react';

import {
  View, TouchableOpacity, Image
} from 'react-native';

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import {
  Text, Button
} from 'react-native-ui-kitten';

import { textStyles, colors, sizes } from '../../../constants/theme';

class ReservedCard extends PureComponent {

  onPress = () => {
  }


  render() {

    const { style, themedStyle, data, ...restProps } = this.props;
    const { name, type, breed, customerName } = data;
    return (
      <TouchableOpacity
        {...restProps}
        style={[themedStyle.container, style]}
        // onPress={this.onPress}
      >
        <Image
          style={themedStyle.image}
          source={{ uri: 'data:image/jpeg;base64,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' }}
        />
        <View style={themedStyle.infoContainer}>
          <View>
            <Text
              style={themedStyle.nameLabel}
              category='s1'>
              {name}
            </Text>
            <Text
              style={themedStyle.typeLabel}
              appearance='hint'
              category='c1'>
              {type} - {breed}
            </Text>
            <Text
              style={themedStyle.nameLabel}
              category='c1'>
              Reserved to {customerName}
            </Text>
          </View>
          <View style={themedStyle.priceContainer}>
            <Button
              size='tiny'
              style={[themedStyle.buttonStyle, { marginBottom: sizes.margin / 2, }]}
              textStyle={[themedStyle.buttonText, textStyles.button]}
              onPress={this.onAddToBucket}
            >
              Send
            </Button>
            <Button
              size='tiny'
              appearance='outline'
              style={themedStyle.buttonStyle}
              textStyle={[themedStyle.buttonText, textStyles.button]}
              onPress={this.onPress}
            >
              Cancel
            </Button>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withStyles(ReservedCard, () => ({
  container: {
    minHeight: 272,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  },
  infoContainer: {
    flex: 1,
    padding: sizes.padding / 2,
    justifyContent: 'space-between',
  },
  priceContainer: {
    alignItems: 'center',
    marginTop: sizes.padding / 2,
  },
  image: {
    flex: 1,
    width: null,
    height: 140,
  },
  nameLabel: textStyles.subtitle,
  typeLabel: textStyles.caption1,
  costLabel: textStyles.subtitle,
  buttonText: {
    fontSize: 9
  },
  buttonStyle: {
    width: '100%'
  }
}));
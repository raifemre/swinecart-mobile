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


import NavigationService from '../../../services/navigation';

import { textStyles, colors, sizes } from '../../../constants/theme';
import { urls } from '../../../constants/randomImage';

import Chance from 'chance';

const chance = Chance();

class RequestedCard extends PureComponent {

  onPressView = () => {
    NavigationService.navigate('ProductDetails');
  }


  render() {

    const { style, themedStyle, data, ...restProps } = this.props;
    const { name, type, breed } = data;
    return (
      <TouchableOpacity
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPressView}
      >
        <Image
          style={themedStyle.image}
          source={{ uri: chance.pickone(urls) }}
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
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withStyles(RequestedCard, () => ({
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
import React, { useState, useEffect, memo, Fragment } from 'react';

import {
  View, TouchableOpacity, Image
} from 'react-native';

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import {
  Text, Button
} from 'react-native-ui-kitten';

import {
  Block, Icon, IconButton
} from '../../../shared/components'

import NavigationService from '../../../services/navigation';

import { addS, capitalizeWords } from '../../../utils/formatters';

import { textStyles, colors, sizes, shadowStyles } from '../../../constants/theme';

function Product({ themedStyle, data }) {

  const { primaryPhotoURL, productInfo, status } = data;
  const { name, type, breed, age } = productInfo;

  const onPressView = () => {
    NavigationService.navigate('ProductDetails', { data });
  };

  const onPressEdit = () => {
    NavigationService.navigate('AddProduct', { data });
  };

  const onPressToggle = () => {
    alert('Toggle');
  };

  const onPressDelete = () => {
    alert('Delete');
  };

  const isDisplayed = status => {
    if (status === 'displayed') {
      return 'Hide Product'
    }
    else if (status === 'hidden') {
      return 'Show Product'
    }
   };

  return (
    <Block
      style={themedStyle.container}
    >
      <TouchableOpacity 
        style={themedStyle.imageContainer}
        activeOpacity={0.50}
        onPress={onPressView}
      >
        <Image
          style={themedStyle.image}
          source={{ uri: primaryPhotoURL }}
          resizeMode='cover'
        />
      </TouchableOpacity>
      <Block flex={1} left style={themedStyle.infoContainer}>
        <Block flex='disabled'row center space='between'>
          <Text style={themedStyle.name}>
            {`${capitalizeWords(name)}`}
          </Text>
        </Block>
        <Text style={themedStyle.type}>
          {`${capitalizeWords(type)}`} - {`${capitalizeWords(breed)}`}
        </Text>
        <Text style={themedStyle.age}>
          {`${age} ${addS(age, 'day')} old`}
        </Text>
        <Text style={themedStyle.quantity}>
          {`Quantity: ${age}`}
        </Text>
      </Block>
      <Block flex='disabled' row right center space='between' style={themedStyle.actionsContainer}>
        {
          status === 'requested' 
            ? null
            : <Fragment>
              <IconButton
                onPress={onPressToggle}
                iconSize={28}
                iconName='eye'
              />
              <IconButton
                onPress={onPressEdit}
                iconSize={28}
                iconName='edit'
                style={{ marginLeft: sizes.margin / 2 }}
              />
              <IconButton
                onPress={onPressDelete}
                iconSize={28}
                iconName='trash-2'
              />
            </Fragment>
        }
    </Block> 
    </Block>
  );
}

export default withStyles(memo(Product), () => ({
  container: {
    ...shadowStyles.shadow2,
    minHeight: 200,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.white1,
  },
  imageContainer: {
    backgroundColor: 'black',
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: 150,
  },
  infoContainer: {
    padding: sizes.padding / 2
  },
  actionsContainer: {
    padding: sizes.padding / 2,
  },
  name: {
    ...textStyles.headline,
    color: '#000000',
    fontSize: 16
  },
  type: {
    ...textStyles.caption1,
    fontSize: 12
  },
  age: {
    ...textStyles.caption1,
    color: colors.gray5,
    fontSize: 12
  },
  quantity: {
    marginTop: 8,
    ...textStyles.caption2,
    fontSize: 14
  },
  buttonText: {
    ...textStyles.button
  },
  toggleDisplayButton: {
    borderWidth: 0,
    marginBottom: sizes.margin / 2,
  },
  button: {
    borderWidth: 0,
  },
}));
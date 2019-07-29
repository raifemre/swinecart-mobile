import React, { memo } from 'react';

import {
  TouchableOpacity, Image
} from 'react-native';

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import {
  Text, Button, Avatar
} from 'react-native-ui-kitten';

import {
  Block
} from '../../../shared/components';

import NavigationService from '../../../services/navigation';

import { textStyles, colors, sizes } from '../../../constants/theme';


import { urls } from '../../../constants/randomImage';

import Chance from 'chance';

const chance = Chance();

function ReservedCard(props) {

  const onPressView = () => {

  }

  const { themedStyle, data, index } = props;
  const { name, type, breed, customerName, statusTime } = data;

  return (
    <Block row padding style={themedStyle.container}>
      <Avatar
        shape='round'
        source={{ uri: chance.pickone(urls) }}
        style={themedStyle.imageStyle}
      />
      <Block paddingHorizontal>
        <Text
          category='h6'
          style={[textStyles.headline, themedStyle.nameStyle]}
        >
          {name}
        </Text>
        <Text
          category='s2'
          style={[textStyles.caption1, themedStyle.typeStyle]}
        >
          {type} - {breed}
        </Text>
        <Text
          category='s2'
          style={[textStyles.label, themedStyle.statusStyle]}
        >
          {'Reserved'}
        </Text>
        <Text
          category='s2'
          style={[textStyles.caption1, themedStyle.requestsStyle]}
        >
          {`to ${customerName}`}
        </Text>
        <Text
          category='s2'
          style={[textStyles.caption1, themedStyle.requestsStyle]}
        >
          {`${statusTime}`}
        </Text>
        <Button
          size='medium'
          onPress={onPressView}
          style={themedStyle.buttonStyle}
        >
          Send for Delivery
        </Button>
        <Button
          size='medium'
          status='danger'
          onPress={onPressView}
          style={themedStyle.buttonStyle}
        >
          Cancel Transaction
        </Button>
      </Block>
    </Block>
  );
}

export default withStyles(memo(ReservedCard), () => ({
  container: {
    minHeight: 150,
    overflow: 'hidden',
    backgroundColor: colors.white1,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1
  },
  imageStyle: {
    width: 96,
    height: 96,
    borderWidth: 1,
    borderColor: colors.gray2
  },
  nameStyle: {
    color: '#000000',
    fontSize: 16
  },
  typeStyle: {
    fontSize: 14
  },
  statusStyle: {
    marginTop: sizes.margin / 2,
    color: '#000000',
    fontSize: 14,
  },
  requestsStyle: {
    color: colors.gray3,
    fontSize: 14,
  },
  buttonStyle: {
    marginTop: sizes.margin / 4,
    borderWidth: 0,
  }
}));
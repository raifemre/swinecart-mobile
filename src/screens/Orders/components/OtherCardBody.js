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

function OtherCardBody(props) {

  const onPressView = () => {

  }

  const { themedStyle, data } = props;
  const { name, type, breed } = data;

  return (
    <Block row padding style={themedStyle.container}>
      <Avatar
        shape='round'
        source={{ uri: chance.pickone(urls) }}
        style={{ width: 96, height: 96 }}
      />
      <Block paddingHorizontal>
        <Text>{name}</Text>
        <Text>{type} - {breed}</Text>
        <Text>{'Requested'}</Text>
        <Text>{'by 2 users'}</Text>
        <Text>{'by 2 users'}</Text>
        <Button
          size='small'
        >
          View Requests
        </Button>
        <Button
          size='small'
          status='danger'
        >
          Cancel Transaction
        </Button>
      </Block>
    </Block>
  );
}

export default withStyles(OtherCardBody, () => ({
  container: {
    minHeight: 150,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray2
  }
}));
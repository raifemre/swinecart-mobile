import React, { Fragment, memo, useState } from 'react';

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import { 
  OverflowMenu,
  Button,
  Text
} from 'react-native-ui-kitten';

import { Block, Icon } from '../../../shared/components';
import { colors, sizes, textStyles } from '../../../constants/theme';

const options = [
  { key: 'requested', text: 'Requested' },
  { key: 'reserved', text: 'Reserved' },
  { key: 'onDelivery', text: 'On Delivery' },
  { key: 'sold', text: 'Sold' },
];

function StatusPicker({ themedStyle, jumpTo }) {

  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState('Requested');

  const onItemSelect = index => {
    setIsVisible(false);
    setStatus(options[index].text);
    jumpTo(options[index].key);
  };

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };


  return (
    <Block row flex='disabled' center middle padding style={themedStyle.container}>
      <Text style={themedStyle.statusText}>
        Status: 
      </Text>
      <OverflowMenu
        items={options}
        visible={isVisible}
        onSelect={onItemSelect}
        onBackdropPress={toggleMenu}
        style={themedStyle.overflowMenu}
      >
        <Button
          size='medium'
          appearance='outline'
          onPress={toggleMenu}
          style={themedStyle.button}
          textStyle={themedStyle.buttonText}
        >
          {status}
        </Button>
      </OverflowMenu>
    </Block>
  );
}

export default withStyles(memo(StatusPicker, () => true), () => ({
  container: {
    paddingVertical: sizes.padding,
    paddingHorizontal: sizes.padding,
    backgroundColor: colors.white1,
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
    width: '100%'
  },
  button: {
    // borderWidth: 0,
    width: 170,
    marginLeft: sizes.margin,
  },
  statusText: {
    ...textStyles.subtitle,
    fontSize: 16,
    color: colors.gray5
  },
  overflowMenu: {
    borderColor: colors.gray2,
    borderWidth: 1
  },
  buttonText: {
    ...textStyles.button
  }
}));  
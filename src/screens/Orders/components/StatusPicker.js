import React, { memo, useState } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { OverflowMenu, Button, Text } from 'react-native-ui-kitten';

import { Block } from '../../../shared/components';
import { colors, sizes, textStyles } from '../../../constants/theme';

import routes from '../routes';

function StatusPicker({ themedStyle, jumpTo }) {

  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState('Requested');

  const onItemSelect = index => {
    setIsVisible(false);
    setStatus(routes[index].text);
    jumpTo(routes[index].key);
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
        items={routes}
        visible={isVisible}
        onSelect={onItemSelect}
        onBackdropPress={toggleMenu}
        style={themedStyle.overflowMenu}
      >
        <Button
          size='medium'
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
    borderWidth: 0,
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
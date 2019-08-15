import React, { memo, useState, useCallback } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Popover, Button, Text, OverflowMenuItem } from 'react-native-ui-kitten';

import { Block } from '../../../shared/components';
import { colors, sizes, textStyles, shadowStyles } from '../../../constants/theme';

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

  const renderContent = useCallback(()=> {
    return routes.map((route, index) => {
      
      const onPress = () => onItemSelect(index);

      const textStyle = [
        themedStyle.menuItemText,
        route.text === status && { color: colors.primary }
      ];

      return (
        <OverflowMenuItem
          key={index}
          text={route.text}
          textStyle={textStyle}
          onPress={onPress}
          style={themedStyle.menuItem}
        />
      );
    });
  }, [ status ]);

  return (
    <Block row flex='disabled' center middle padding style={themedStyle.container}>
      <Text style={themedStyle.statusText}>
        Select Status:
      </Text>
      <Popover
        indicatorOffset={0}
        content={renderContent()}
        visible={isVisible}
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
      </Popover>
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
    ...shadowStyles.shadow1,
    width: 170
  },
  menuItemText: {
    ...textStyles.paragraph,
    fontSize: 14
  },
  menuItem: {
  },
  buttonText: {
    ...textStyles.button
  }
}));  
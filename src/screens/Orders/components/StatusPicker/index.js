import React, { memo, useState, useCallback, useEffect } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Popover, OverflowMenuItem } from 'react-native-ui-kitten';

import { Block } from 'shared/components';
import { colors, sizes, textStyles, shadowStyles } from 'constants/theme';

import {
  DropdownButton, LabelText
} from './components';

import routes from '../../routes';

function StatusPicker({ themedStyle, jumpTo }) {

  const [isVisible, setIsVisible] = useState(false);
  const [currentStatus, setCurrentStatus ] = useState(routes[0]);

  useEffect(() => {
    jumpTo(currentStatus.key);
  }, [currentStatus]);

  const onItemSelect = useCallback(index => {
    setIsVisible(false);
    setCurrentStatus(routes[index]);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const renderContent = useCallback(() => {
    return routes.map((route, index) => {
      const onPress = () => onItemSelect(index);
      const textStyle = [
        themedStyle.menuItemText,
        route.text === currentStatus.text && { color: colors.primary }
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
  }, [currentStatus]);

  return (
    <Block row flex='disabled' center middle padding style={themedStyle.container}>
      <LabelText />
      <Popover
        indicatorOffset={0}
        content={renderContent()}
        visible={isVisible}
        onBackdropPress={toggleMenu}
        style={themedStyle.overflowMenu}
      >
        <DropdownButton
          onPress={toggleMenu}
          isVisible={isVisible}
          currentStatus={currentStatus}
        />
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
    width: '100%',
    minHeight: 100,
  },
  overflowMenu: {
    ...shadowStyles.shadow1,
    borderRadius: 5,
    width: 200,
    marginLeft: sizes.margin,
  },
  menuItemText: {
    ...textStyles.paragraph,
    fontSize: 14
  },
}));  
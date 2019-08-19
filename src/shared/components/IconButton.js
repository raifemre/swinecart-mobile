import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Button } from 'react-native-ui-kitten';


import Icon from './Icon';

function IconButton({ themedStyle, onPress, iconName, iconSize = 30, iconColor='#000000', style }) {

  const renderIcon = () => (
    <Icon name={iconName} size={iconSize} color={iconColor} />
  );

  return (
    <Button
      size='small'
      // appearance='ghost'
      icon={renderIcon}
      onPress={onPress}
      style={[style, themedStyle.button]}
    />
  );
}

export default withStyles(memo(IconButton, () => true), () => ({
  button: {
    borderWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: 'transparent',
  },
}));
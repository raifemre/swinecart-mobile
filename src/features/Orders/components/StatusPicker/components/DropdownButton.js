import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { withStyles } from 'react-native-ui-kitten/theme';

import { Block, Text, Icon } from 'shared/components';
import { sizes, colors } from 'constants/theme';

function DropdownButton({ themedStyle, onPress, currentStatus, isVisible }) {

  return (
    <TouchableOpacity
      activeOpacity={0.50}
      onPress={onPress}
    >
      <Block flex={'disabled'} row center middle marginLeft style={themedStyle.container}>
        <Block flex1={1}>
          <Text subtitle size={15}>{currentStatus.text}</Text>
        </Block>
        <Icon
          name={isVisible ? 'chevron-up' : 'chevron-down'}
          color={colors.black1}
        />
      </Block>
    </TouchableOpacity>
  );
}

export default withStyles(memo(DropdownButton, () => true), () => ({
  container: {
    borderColor: colors.primary,
    backgroundColor: colors.white1,
    width: 200,
    borderWidth: 2,
    borderRadius: 5,
    minHeight: 48,
    paddingHorizontal: sizes.padding / 2,
  },
}));  
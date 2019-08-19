import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';

import {
  Block
} from '../../../shared/components';

import { textStyles, colors } from '../../../constants/theme';

function Section(props) {

  const { themedStyle, onPress, text, textColor } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.65}
      onPress={onPress}
    >
      <Block padding style={themedStyle.section}>
        <Text category='s2' style={[textStyles.subtitle, { color: textColor }]}>
          {text}
        </Text>
      </Block>
    </TouchableOpacity>
  )

}

export default memo(withStyles(Section, () => ({
  section: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray2,
  },
})));
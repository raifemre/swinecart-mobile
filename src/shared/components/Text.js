import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text as RNText } from 'react-native-ui-kitten';

import { sizes, colors, textStyles } from 'constants/theme';

function Text(props) {

  const {
    themedStyle, 
    size, color,
    headline, subtitle,
    ...otherProps
  } = props;

  const textStyles = [
    headline && themedStyle.headline,
    subtitle && themedStyle.subtitle,
    size && { fontSize: size, lineHeight: 1.2 * size },
    color && { color: colors[color] }
  ];

  return (
    <RNText style={textStyles} {...otherProps} />
  );
}

export default withStyles(memo(Text), () => ({
  headline: {
    ...textStyles.headline,
  },
  subtitle: {
    ...textStyles.subtitle,
  },
  paragraph: {
    ...textStyles.paragraph,
  },
  caption1: {
    ...textStyles.caption1,
  },
  caption2: {
    ...textStyles.caption2,
  },
  label: {
    ...textStyles.label,
  },
}));
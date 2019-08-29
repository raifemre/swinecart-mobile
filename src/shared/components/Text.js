import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text as RNText } from 'react-native-ui-kitten';

import { sizes, colors, textStyles } from 'constants/theme';

function Text(props) {

  const {
    themedStyle, 
    size, color, lineHeight,
    headline, subtitle, paragraph, caption1, caption2, label,
    marginTop, marginBottom,
    ...otherProps
  } = props;

  const textStyles = [
    headline && themedStyle.headline,
    subtitle && themedStyle.subtitle,
    paragraph && themedStyle.paragraph,
    caption1 && themedStyle.caption1,
    caption2 && themedStyle.caption2,
    label && themedStyle.label,
    size && { fontSize: size, lineHeight: 1.2 * size },
    lineHeight && { lineHeight },
    color && { color: colors[color] },

    marginTop && { marginTop: sizes.margin * marginTop, },
    marginBottom && { marginBottom: sizes.margin * marginBottom, },

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
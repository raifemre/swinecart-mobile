import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';

import { Button as UKButton } from 'react-native-ui-kitten';

import { sizes, textStyles } from 'constants/theme';

function Button(props) {

  const { 
    themedStyle,
    marginTop,
    ...otherProps 
  } = props;

  const buttonStyles = [
    marginTop && { marginTop: sizes.margin * marginTop },
    themedStyle.buttonStyle,
  ];

  return (
    <UKButton
      textStyle={themedStyle.buttonTextStyle}
      style={buttonStyles}
      {...otherProps}
    />
  );
}

export default withStyles(memo(Button, () => true), () => ({
  buttonStyle: {
    borderWidth: 0,
  },
  buttonTextStyle: {
    ...textStyles.button,
  }
}));
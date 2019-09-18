import React, { memo } from 'react';

import { withStyles } from 'react-native-ui-kitten/theme';

import { Block } from 'shared/components';

import { colors, shadowStyles } from 'constants/theme';

function ProductContainer({ themedStyle, children }) {

  return (
    <Block style={themedStyle.container}>
      {children}
    </Block>
  );
}

export default withStyles(memo(ProductContainer, () => true), () => ({
  container: {
    ...shadowStyles.shadow2,
    minHeight: 200,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.white1,
  }
}));
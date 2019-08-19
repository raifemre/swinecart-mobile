import React, { Fragment, memo } from 'react';

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import { Text } from 'react-native-ui-kitten';

import { textStyles } from '../../../../constants/theme';

function ProductInfo(props) {

  const { themedStyle, name, type, breed } = props;

  return (
    <Fragment>
      <Text
        style={themedStyle.name}
      >
        {name}
      </Text>
      <Text
        style={themedStyle.type}
      >
        {type} - {breed}
      </Text>
    </Fragment>
  );
}

export default withStyles(memo(ProductInfo, () => true), () => ({
  name: {
    ...textStyles.headline,
    color: '#000000',
    fontSize: 16
  },
  type: {
    ...textStyles.caption1,
    fontSize: 14
  }
}));
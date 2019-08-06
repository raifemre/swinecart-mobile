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
        category='h6'
        style={[textStyles.headline, themedStyle.nameStyle]}
      >
        {name}
      </Text>
      <Text
        category='s2'
        style={[textStyles.caption1, themedStyle.typeStyle]}
      >
        {type} - {breed}
      </Text>
    </Fragment>
  );
}

export default withStyles(memo(ProductInfo, () => true), () => ({
  nameStyle: {
    color: '#000000',
    fontSize: 16
  },
  typeStyle: {
    fontSize: 14
  }
}));
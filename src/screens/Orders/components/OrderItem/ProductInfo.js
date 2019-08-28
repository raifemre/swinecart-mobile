import React, { Fragment, memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';

import { textStyles } from 'constants/theme';
import { capitalizeWords } from 'utils/formatters';

import { Text } from 'shared/components';


function ProductInfo(props) {

  const { themedStyle, name, type, breed } = props;

  return (
    <Fragment>
      <Text
        style={themedStyle.name}
      >
        {capitalizeWords(name)}
      </Text>
      <Text
        style={themedStyle.type}
      >
        {capitalizeWords(type)} - {breed}
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
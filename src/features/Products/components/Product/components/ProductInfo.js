import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';

import { Text } from 'react-native-ui-kitten';

import { Block } from '../../../../../shared/components';

import { addS, capitalizeWords } from '../../../../../utils/formatters';
import { textStyles, colors, sizes } from '../../../../../constants/theme';

function ProductInfo(props) {

  const { themedStyle, name, type, breed, age } = props;

  return (
    <Block flex={1} left style={themedStyle.infoContainer}>
      <Block flex='disabled' row center space='between'>
        <Text style={themedStyle.name}>
          {`${capitalizeWords(name)}`}
        </Text>
      </Block>
      <Text style={themedStyle.type}>
        {`${capitalizeWords(type)}`} - {`${capitalizeWords(breed)}`}
      </Text>
      <Text style={themedStyle.age}>
        {`${age} ${addS(age, 'day')} old`}
      </Text>
    </Block>
  );
}

export default withStyles(memo(ProductInfo, () => true), () => ({
  infoContainer: {
    padding: sizes.padding / 2
  },
  name: {
    ...textStyles.headline,
    color: '#000000',
    fontSize: 16
  },
  type: {
    ...textStyles.caption1,
    fontSize: 12
  },
  age: {
    ...textStyles.caption1,
    color: colors.gray5,
    fontSize: 12
  }
}));
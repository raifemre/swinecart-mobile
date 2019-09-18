import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';
import { textStyles, colors } from '../../../constants/theme';

import { Block } from '../../../shared/components';

import { formatBirthdate, addS, capitalizeWords } from '../../../utils/formatters';

function ProductInfo({ themedStyle, productInfo }) {
  const { name, type, breed, birth_date, age } = productInfo;
  return (
    <Block flex='disabled' marginBottom>
      <Text style={themedStyle.nameStyle}>{`${capitalizeWords(name)}`}</Text>
      <Text style={themedStyle.typeStyle}>{`${capitalizeWords(type)}`} - {`${capitalizeWords(breed)}`}</Text>
      <Text style={themedStyle.birthDateStyle}>{`${age} ${addS(age, 'day')} old (Birthdate is on ${birth_date}`})</Text>
    </Block>
  );
}

export default withStyles(memo(ProductInfo, () => true), () => ({
  nameStyle: {
    ...textStyles.headline,
    fontSize: 30,
    lineHeight: 36
  },
  typeStyle: {
    ...textStyles.subtitle,
    fontSize: 20,
    lineHeight: 24,
    color: colors.gray5
  },
  birthDateStyle: {
    ...textStyles.caption1,
    fontSize: 14,
    lineHeight: 16.8,
    color: colors.gray5
  },
}));
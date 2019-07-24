import React, { PureComponent } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';

import Block from './Block';

import { colors, textStyles } from '../../constants/theme';

class InfoRow extends PureComponent {

  render() {

    const { themedStyle, label, data } = this.props;
    const { labelStyle, container, dataStyle } = themedStyle;

    return (
      <Block row center space='between' padding style={container}>
        <Block marginRight flex='disabled'>
          <Text style={labelStyle} appearance='hint'>
            {label}
          </Text>
        </Block>
        <Block row right>
          <Text style={dataStyle} appearance='hint'>
            {data}
          </Text>
        </Block>
      </Block>
    )
  }

} 

export default withStyles(InfoRow, () => ({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray2
  },
  labelStyle: {
    ...textStyles.caption2,
  },
  dataStyle: {
    ...textStyles.caption2,
    color: '#000000',
  }
}));

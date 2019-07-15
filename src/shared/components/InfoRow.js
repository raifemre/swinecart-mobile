import React, { PureComponent } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';

import Block from './Block';

import { colors, textStyles } from '../../constants/theme';

class InfoRow extends PureComponent {


  renderTextElement = (text, style) => (
    <Text
      style={style}
      appearance='hint'
    >
      {text}
    </Text>
  )

  render() {

    const { themedStyle, title, data } = this.props;
    const { titleStyle, container, dataStyle } = themedStyle;

    return (
      <Block row center space='between' padding style={container}>
        <Block marginRight flex='disabled'>
          {this.renderTextElement(title, titleStyle)}
        </Block>
        <Block row right>
          {this.renderTextElement(data, dataStyle)}
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
  titleStyle: {
    ...textStyles.caption2,
  },
  dataStyle: {
    ...textStyles.caption2,
    color: '#000000',
  }
}));

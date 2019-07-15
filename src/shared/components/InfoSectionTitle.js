import React, { PureComponent } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten';

import Block from './Block';

import { colors, textStyles } from '../../constants/theme';

class InfoSectionTitle extends PureComponent {
  render() {

    const { themedStyle, title } = this.props;
    const { titleStyle, container } = themedStyle;

    return (
      <Block flex={1} middle padding style={container}>
        <Text
          style={titleStyle}
          appearance='hint'
          category='s1'
        >
          {title}
        </Text>
      </Block>
    )
  }
}

export default withStyles(InfoSectionTitle, () => ({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray2
  },
  titleStyle: {
    ...textStyles.caption2
  }
}));

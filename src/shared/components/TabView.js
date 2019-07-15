import React, { memo } from 'react';
import {
  TabView
} from 'react-native-ui-kitten';

import { withStyles } from 'react-native-ui-kitten/theme';

import { colors } from '../../constants/theme';

function Tabs(props) {

  const { onSelect, selectedIndex, children, tabs, themedStyle } = props;

  return (
    <TabView
      selectedIndex={selectedIndex}
      onSelect={onSelect}
      style={themedStyle.container}
    >
      {children}
    </TabView>
  )

}

export default withStyles(memo(Tabs), () => ({
  container: {
    flex: 1,
    backgroundColor: colors.gray2,
  }
}));
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { sizes } from '../constants/theme';

function Block(props) {

  const { 
    flex, row, center, middle, right, space, padding, marginBottom,
    style, children, ...otherProps
  } = props;

  const blockStyles = [
    styles.block,
    flex && { flex },
    flex === 'disabled' && { flex: 0 },
    center && styles.center,
    middle && styles.middle,
    right && styles.right,
    space && { justifyContent: `space-${space}` },
    row && styles.row,
    padding && styles.padding,
    marginBottom && styles.marginBottom,
    style,
  ];

  return (
    <View style={blockStyles} {...otherProps}>
      {children}
    </View>
  );

}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row'
  },
  center: {
    alignItems: 'center'
  },
  middle: {
    justifyContent: 'center'
  },
  right: {
    justifyContent: 'flex-end'
  },
  padding: {
    paddingTop: sizes.padding,
  },
  marginBottom: {
    marginBottom: sizes.margin
  },
});

export default Block;

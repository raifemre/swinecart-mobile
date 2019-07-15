import React from 'react';
import { StyleSheet, View } from 'react-native';

import { sizes } from '../../constants/theme';

function Block(props) {

  const { 
    flex, row, center, left, middle, right, space, 
    padding, paddingTop, paddingHorizontal,
    marginBottom, marginBottom2, marginTop, marginTop2, marginRight,
    style, children, ...otherProps
  } = props;

  const blockStyles = [
    styles.block,
    flex && { flex },
    flex === 'disabled' && { flex: 0 },
    center && styles.center,
    middle && styles.middle,
    right && styles.right,
    left && styles.left,
    space && { justifyContent: `space-${space}` },
    row && styles.row,
    padding && styles.padding,
    paddingTop && styles.paddingTop,
    paddingHorizontal && styles.paddingHorizontal,
    marginTop && styles.marginTop,
    marginTop2 && styles.marginTop2,
    marginBottom && styles.marginBottom,
    marginBottom2 && styles.marginBottom2,
    marginRight && styles.marginRight,
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
  left: {
    justifyContent: 'flex-start',
  },
  middle: {
    justifyContent: 'center'
  },
  right: {
    justifyContent: 'flex-end'
  },
  padding: {
    padding: sizes.padding,
  },
  paddingTop: {
    paddingTop: sizes.padding,
  },
  paddingHorizontal: {
    paddingHorizontal: sizes.padding,
  },
  marginTop: {
    marginTop: sizes.margin
  },
  marginTop2: {
    marginTop: sizes.margin * 2
  },
  marginBottom: {
    marginBottom: sizes.margin
  },
  marginBottom2: {
    marginBottom: sizes.margin * 2
  },
  marginRight: {
    marginRight: sizes.margin
  },
});

export default Block;

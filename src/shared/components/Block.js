import React from 'react';
import { StyleSheet, View } from 'react-native';

import { sizes } from '../../constants/theme';

function Block(props) {

  const { 
    flex, row, center, left, middle, right, space, 
    padding, padding2, paddingTop, paddingBottom, paddingHorizontal, paddingVertical,
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
    padding2 && styles.padding2,
    paddingTop && styles.paddingTop,
    paddingBottom && styles.paddingBottom,
    paddingHorizontal && styles.paddingHorizontal,
    paddingVertical && styles.paddingVertical,
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
    margin: 0,
    padding: 0
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
  padding2: {
    padding: sizes.padding * 2,
  },
  paddingTop: {
    paddingTop: sizes.padding,
  },
  paddingBottom: {
    paddingBottom: sizes.padding,
  },
  paddingHorizontal: {
    paddingHorizontal: sizes.padding,
  },
  paddingVertical: {
    paddingVertical: sizes.padding,
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

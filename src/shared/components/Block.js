import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { sizes, colors } from 'constants/theme';

function Block(props) {

  const { 
    flex, row, center, left, middle, right, space, 
    padding, padding2, paddingTop, paddingLeft, paddingBottom, paddingHorizontal, paddingVertical,
    marginBottom, marginBottom2, marginTop, marginTop2, margin, marginRight, marginLeft, marginVertical,
    style, children, backgroundColor, ...otherProps
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
    backgroundColor && { backgroundColor: colors[backgroundColor] },
    row && styles.row,
    padding && styles.padding,
    padding2 && styles.padding2,
    paddingTop && styles.paddingTop,
    paddingLeft && styles.paddingLeft,
    paddingBottom && styles.paddingBottom,
    paddingHorizontal && styles.paddingHorizontal,
    paddingVertical && styles.paddingVertical,
    marginTop && styles.marginTop,
    marginTop2 && styles.marginTop2,
    margin && styles.margin,
    marginVertical && styles.marginVertical,
    marginBottom && styles.marginBottom,
    marginBottom2 && styles.marginBottom2,
    marginRight && styles.marginRight,
    marginLeft && styles.marginLeft,
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
  paddingLeft: {
    paddingLeft: sizes.padding,
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
  marginVertical: {
    marginVertical: sizes.margin
  },
  margin: {
    margin: sizes.margin
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
  marginLeft: {
    marginLeft: sizes.margin
  },
});

export default memo(Block);

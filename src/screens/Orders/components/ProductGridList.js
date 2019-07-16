import React, { PureComponent } from 'react';

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import {
  List
} from 'react-native-ui-kitten';


import {
  colors, sizes
} from '../../../constants/theme'

class ProductGridList extends PureComponent {

  renderProduct = ({ item }) => {
    const { themedStyle, Component } = this.props;

    return (
      <Component 
        data={item}
        style={themedStyle.item}
      />
    );
  }


  render() {

    const { themedStyle, contentContainerStyle, data } = this.props;
    return (
      <List
        contentContainerStyle={[contentContainerStyle, themedStyle.container]}
        data={data}
        renderItem={this.renderProduct}
        numColumns={2}
      />
    );
  }

}



export default withStyles(ProductGridList, () => ({
  container: {
    paddingHorizontal: sizes.padding / 2,
    paddingTop: sizes.padding,
    paddingBottom: sizes.padding * 3,
    backgroundColor: colors.gray2,
  },
  item: {
    flex: 1,
    marginHorizontal: sizes.margin / 2,
    marginVertical: sizes.margin / 2,
  },
}));
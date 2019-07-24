import React, { Fragment, PureComponent } from 'react';

// import {

// } from 'react-native-ui-kitten';

import { 
  Block, HeaderBar
} from '../../shared/components';

import { colors } from '../../constants/theme';

import {
  RequestedCard, ProductGridList
} from './components'

import data from './data';

class Container extends PureComponent {

  componentDidMount() {
  }

  render() {
    return (
      <Fragment>
        <HeaderBar title='My Products' />
        <Block flex={1} style={{ backgroundColor: colors.gray2 }}>
          <ProductGridList Component={RequestedCard} data={data.data} />
        </Block>
      </Fragment>
    );
  }

}

export default Container;
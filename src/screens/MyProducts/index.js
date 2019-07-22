import React, { Fragment, PureComponent } from 'react';

import {
  TopNavigation
} from 'react-native-ui-kitten';

import { 
  Block
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
        <TopNavigation
          title='My Products'
          alignment='center'
        />
        <Block flex={1} style={{ backgroundColor: colors.gray2 }}>
          <ProductGridList Component={RequestedCard} data={data.data} />
        </Block>
      </Fragment>
    );
  }

}

export default Container;
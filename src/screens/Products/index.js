import React, { Fragment, memo } from 'react';

import { 
  Block, HeaderBar, AddProductButton
} from '../../shared/components';

import { colors } from '../../constants/theme';

import {
  ProductGridList
} from './components'


function Container(props) {

  return (
    <Fragment>
      <HeaderBar 
        title='Products'
        leftControl={<AddProductButton />}
      />
      <ProductGridList />
    </Fragment>
  );

}
0
export default memo(Container);
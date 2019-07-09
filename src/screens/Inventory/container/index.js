import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import ProductTabs from '../components/ProductTabs';

import { 
  Block
} from '../../../shared';

@inject('InventoryStore')
@observer
class Inventory extends Component {

  render() {

    const { InventoryStore } = this.props;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={InventoryStore.cancelTranLoading || InventoryStore.confirmSoldLoading} />
        <HeaderWrapper>
          <BodyWrapper title='Orders' />
        </HeaderWrapper>
        <Block flex={1}>
          <ProductTabs />
        </Block>
      </React.Fragment>
    );
  }
}

export default Inventory;
import React, { memo } from 'react';

import { NavigationService, ModalService } from 'services';

import { Button, Block } from 'shared/components';

function OrderActions(props) {

  const { status, product, reservation } = props;

  const onPressView = () => {
    NavigationService.navigate('Requests', { productId: product.id });
  };

  const onPressPrimaryAction = () => {
    if (status === 'reserved') {
      ModalService.showModal('SendProduct', { product, reservation });
    }
    else {
      ModalService.showModal('ConfirmSold', { product, reservation });
    }
  };

  const onPressCancel = () => {
    ModalService.showModal('CancelTransaction', { product, reservation });
  };

  if (status === 'requested') {
    return (
      <Block marginTop={1}>
        <Button size='medium' onPress={onPressView}>
            View Requests
        </Button>
      </Block>
    );
  }

  else if (status === 'reserved' || status === 'onDelivery') {
    return (
      <Block marginTop={1}>
        <Button size='medium' onPress={onPressPrimaryAction}>
          { status === 'reserved' ? 'Send for Delivery' : 'Confirm Sold' }
        </Button>
        <Button size='medium' status='danger' onPress={onPressCancel} marginTop={0.5}>
          Cancel Transaction
        </Button>
      </Block>
    )
  }

  else {
    return null;
  }
}

export default memo(OrderActions, () => true);
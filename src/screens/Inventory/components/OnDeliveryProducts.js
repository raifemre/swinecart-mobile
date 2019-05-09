import React from 'react';
import { observer } from 'mobx-react';

import Products from './Products';
import OnDeliveryCard from './OnDeliveryCard';

function OnDeliveryProducts() {

  return (
    <Products status='on_delivery' CardComponent={OnDeliveryCard} />
  )

}

export default observer(OnDeliveryProducts); 
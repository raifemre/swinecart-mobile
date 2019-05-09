import React from 'react';
import { observer } from 'mobx-react';

import Products from './Products';
import RequestedCard from './RequestedCard';

function RequestedProducts() {

  return (
    <Products status='requested' CardComponent={RequestedCard} />
  )

}

export default observer(RequestedProducts); 
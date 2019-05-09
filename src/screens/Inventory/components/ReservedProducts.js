import React from 'react';
import { observer } from 'mobx-react';

import Products from './Products';
import ReservedCard from './ReservedCard';

function ReservedProducts() {

  return (
    <Products status='reserved' CardComponent={ReservedCard} />
  )

}

export default observer(ReservedProducts); 
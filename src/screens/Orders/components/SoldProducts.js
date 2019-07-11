import React from 'react';
import { observer } from 'mobx-react';

import Products from './Products';
import SoldCard from './SoldCard';

function SoldProducts() {

  return (
    <Products status='sold' CardComponent={SoldCard} />
  )

}

export default observer(SoldProducts); 
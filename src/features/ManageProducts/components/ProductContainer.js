import React from 'react';
import { observer } from 'mobx-react';

import Product from './Product';

function ProductContainer({ product }) {

  const onPressMore = () => {
    alert('hello');
  };

  const onPressCard = () => {
    alert('hi')
  }

  return (
    <Product
      product={product}
      onPressMore={onPressMore}
      onPressCard={onPressCard}
    />
  )
}

export default observer(ProductContainer);

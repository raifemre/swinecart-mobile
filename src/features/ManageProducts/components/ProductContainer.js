import React from 'react';
import { observer } from 'mobx-react';

import Product from './Product';

function ProductContainer(props) {

  const onPressMore = () => {
    alert('hello');
  };

  const onPressCard = () => {
    alert('hi')
  }

  const onPressToggle = () => {
    alert('Status')
  }

  return (
    <Product
      {...props}
      onPressMore={onPressMore}
      onPressCard={onPressCard}
      onPressToggle={onPressToggle}
    />
  )
}

export default observer(ProductContainer);

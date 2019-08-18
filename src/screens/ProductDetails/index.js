import React, { Fragment, memo, useState, useEffect } from 'react';

import { HeaderBar, BackButton } from '../../shared/components';

import { Product } from './components';

import { createProduct } from '../../utils/mockdata';

function Container({ navigation }) {

  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fakeProduct = createProduct();
      setProductDetails(fakeProduct);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <HeaderBar
        title='Product Details'
        leftControl={<BackButton />}
      />
      <Product productDetails={productDetails} />
    </Fragment>
  );
}

export default memo(Container, () => true);
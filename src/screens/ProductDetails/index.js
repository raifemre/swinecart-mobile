import React, { Fragment, memo, useState, useEffect } from 'react';

import { HeaderBar, BackButton } from '../../shared/components';

import { Product } from './components';

import { ProductsService } from '../../services';

function Container({ navigation }) {

  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const id = navigation.getParam('id');
    ProductsService.getProductDetails(id)
      .then(response => {
        if (response && response.data && response.data.product) {
          // console.dir(response.data.product);
          setProductDetails(response.data.product);
        }
      });
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
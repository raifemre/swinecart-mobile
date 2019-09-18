import React, { memo } from 'react';

import {
  ProductImage,
  ProductContainer,
  ProductInfo,
  ProductActions
} from './components';

function Product({ data }) {

  const { image, name, type, breed, age, status, id } = data;

  const onPressView = () => {
    // NavigationService.navigate('ProductDetails', { id });
  };

  return (
    <ProductContainer>
      <ProductImage
        imageUrl={image}
        onPressView={onPressView}
      />
      <ProductInfo
        name={name}
        type={type}
        breed={breed}
        age={age}
      />
      {/* <ProductActions 
        status={status}
        productId={id}
      /> */}
    </ProductContainer>
  );
}

export default memo(Product);
import React, { Fragment, memo } from 'react';
import { capitalizeWords } from 'utils/formatters';

import { Text } from 'shared/components';

function ProductInfo({ name, type, breed }) {
  return (
    <Fragment>
      <Text headline color='black1' size={18}>
        {capitalizeWords(name)}
      </Text>
      <Text caption1 size={14}>
        {capitalizeWords(type)} - {breed}
      </Text>
    </Fragment>
  );
}

export default memo(ProductInfo, () => true);
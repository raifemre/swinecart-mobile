import React, { memo, useEffect } from 'react';
import { Block } from 'shared/components';
import { Form } from './components';

function Container(props) {

  return (
    <Block middle padding flex={1}>
      <Form />
    </Block>
  );
}

export default memo(Container, () => true);
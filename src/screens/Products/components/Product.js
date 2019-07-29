import React from 'react';
import { Card} from 'native-base';
import { observer } from 'mobx-react';

import ProductInfo from './ProductInfo';
import ProductFooter from './ProductFooter';

import styles from '../styles';

function Product() {
  return (
    <Card style={styles.cardStyle}>
      <ProductInfo product={this.props.product} />
      <ProductFooter product={this.props.product} />
    </Card>
  );
}

export default observer(Product);
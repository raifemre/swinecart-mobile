import React from 'react';
import { observer, inject } from 'mobx-react';
import { CardItem, View, Left, Right } from 'native-base';

import IconButton from '../../../shared/IconButton';
import styles from '../styles';
import { ternary } from '../../../utils';

function ProductFooter({ product, selected, ProductsStore }) {
  
  const { flex1, cardItemLast, flexDirRow } = styles;
  const { id } = product;

  onToggleStatus = () => {
    ProductsStore.toggleStatus(id);
  }

  onDeleteProduct = () => {
    ProductsStore.deleteProduct(id);
  }

  onToggleSelected = () => {

  }

  return (
    <React.Fragment>
      <CardItem last style={cardItemLast}>
        <Left>
          <IconButton size={24} onPress={onToggleSelected}
            name={ternary(selected, true, 'check-circle', 'checkbox-blank-circle-outline')}
            type='MaterialCommunityIcons'
          />
        </Left>
        <Right style={flex1}>
          <View style={flexDirRow}>
            {
              product.status !== 'requested' && 
              <IconButton marginLeft={0} marginRight={8} size={24} name='edit' type='MaterialIcons' />
            }
            {
              product.status !== 'requested' &&
                <IconButton marginLeft={8} marginRight={8}
                  size={24}
                  name={product.status === 'displayed' ? 'eye-off' : 'eye'}
                  type='MaterialCommunityIcons'
                  onPress={onToggleStatus}
                />
            }
            {
              <IconButton
                marginLeft={8}
                marginRight={0}
                size={24}
                name='delete'
                type='MaterialCommunityIcons'
                onPress={onDeleteProduct}
              />
            }
          </View>
        </Right>
      </CardItem>
    </React.Fragment>
  );
}

export default inject('ProductsStore')(observer(ProductFooter));
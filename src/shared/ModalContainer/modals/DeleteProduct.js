import React, { memo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Block from '../../Block';
import Button from '../../Button';
import Text from '../../Text';

function CancelTransaction(props) {

  // Props
  const { data, hideModal } = props;
  const { product } = data;
  const { name } = product;

  const deleteProduct = useStoreActions(actions => actions.products.deleteProduct);

  const onPressPrimaryAction = () => {
    deleteProduct(product);
    hideModal();
  };

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Block backgroundColor='white1' borderRadius={5}>
      <Block padding={1}>
        <Text normal size={18} textAlign='center'>
          Are you sure you want to delete product:
          <Text bold size={18} textAlign='center'>
            {` ${name} `}
          </Text>
          ?
        </Text>
      </Block>
      <Block padding={1}>
        <Block padding={1} backgroundColor='color-danger-100' borderRadius={5}>
          <Text normal size={14} textAlign='center' color='danger'>
            Once you delete a product, it will no longer be available in your inventory.
        </Text>
        </Block>
      </Block>
      <Block row center right padding={1} >
        <Block flex={1} marginRight={1}>
          <Button size='tiny' appearance='ghost' status='basic' onPress={onPressClose}>
            Close
          </Button>
        </Block>
        <Block flex={1}>
          <Button size='tiny' status='danger' onPress={onPressPrimaryAction}>
            Yes, delete it
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(CancelTransaction);
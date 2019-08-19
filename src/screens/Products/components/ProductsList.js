import React, { Fragment, useState, memo, useEffect } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { withStyles } from 'react-native-ui-kitten/theme';

import { colors } from '../../../constants/theme'

import Product from './Product';

import {
  EmptyListMessage, LoadingView, ListFooter
} from '../../../shared/components';

import { createRandomProducts } from '../../../utils/mockdata';

function ProductsList({ themedStyle }) {

  const [products, setProducts] = useState(null);
  const [isRefreshing, setRefreshing] = useState(true);

  useEffect(() => {
    const fakeProducts = createRandomProducts(5);
    setProducts(fakeProducts);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Product
        data={item}
      />
    );
  };

  const renderListEmptyComponent = () => (
    <EmptyListMessage message={'No Products!'} />
  );

  const renderFooterComponent = () => {
    return (
      <Fragment>
        {(products && products.length > 0) && <ListFooter isRefreshing={isRefreshing} />}
      </Fragment>
    );
  };

  const onEndReached = () => {

  };

  return (
    <Fragment>
      {products && <FlatGrid
        items={products}
        itemDimension={150}
        spacing={8}
        renderItem={renderItem}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        initialNumToRender={10}
        maxToRenderPerBatch={2}
        ListEmptyComponent={renderListEmptyComponent}
        ListFooterComponent={renderFooterComponent}
        ListFooterComponentStyle={themedStyle.ListFooterStyle}
        showsVerticalScrollIndicator={false}
        style={themedStyle.containerStyle}
        contentContainerStyle={themedStyle.contentContainerStyle}
      />}
      {!products && <LoadingView />}
    </Fragment>
  );
}

export default withStyles(memo(ProductsList, () => true), () => ({
  containerStyle: {
    backgroundColor: colors.gray2,
  },
  contentContainerStyle: {
    flexGrow: 1
  }
}));
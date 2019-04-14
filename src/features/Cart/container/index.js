import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, View, Right, Left } from 'native-base';

import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';
import Segments from '../../../shared/Segments';

import Items from '../components/Items';
import Item from '../components/Item';
import RequestedItem from '../components/RequestedItem';
import ReservedItem from '../components/ReservedItem';
import OnDeliveryItem from '../components/OnDeliveryItem';
import SoldItem from '../components/SoldItem';

@inject('SwineCartStore')
@observer
class Cart extends Component {

  componentDidMount() {
    const { SwineCartStore } = this.props;
    SwineCartStore.getItemCount();
    SwineCartStore.getItems('not_requested');
    SwineCartStore.getItems('requested');
    SwineCartStore.getItems('reserved');
    SwineCartStore.getItems('on_delivery');
    SwineCartStore.getItems('sold');
  }

  setIndex = index => {
    this.props.SwineCartStore.onSelectIndex(index);
  }

  render() {

    const { contentStyle } = styles;
    
    const { SwineCartStore } = this.props;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={SwineCartStore.loadingRemove} />
        <SpinnerWithOverlay visible={false} />
        <Container>
          <HeaderWrapper>
            <BodyWrapper title='Swine Cart' />
          </HeaderWrapper>
          <Segments
            values={['Cart Items', 'Requested', 'Reserved', 'On Delivery', 'Sold']}
            selectedIndex={SwineCartStore.selectedIndex}
            onTabPress={this.setIndex}
          />
          <View style={contentStyle}>
            {SwineCartStore.selectedIndex === 0 && <Items status='not_requested' CardComponent={Item} />}
            {SwineCartStore.selectedIndex === 1 && <Items status='requested' CardComponent={RequestedItem} />}
            {SwineCartStore.selectedIndex === 2 && <Items status='reserved' CardComponent={ReservedItem} />}
            {SwineCartStore.selectedIndex === 3 && <Items status='on_delivery' CardComponent={OnDeliveryItem} />}
            {SwineCartStore.selectedIndex === 4 && <Items status='sold' CardComponent={SoldItem} />}
          </View>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 5,
  },
});

export default Cart;
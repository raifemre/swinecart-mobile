import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, View, Right, Left } from 'native-base';

import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import Items from '../components/Items';
import Item from '../components/Item';
import RequestedItem from '../components/RequestedItem';

@inject('SwineCartStore')
@observer
class Cart extends Component {

  componentDidMount() {
    this.props.SwineCartStore.getItems('not_requested');
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
            <BodyWrapper title='Cart' />
          </HeaderWrapper>
          <View style={contentStyle}>
            <Items status='not_requested' CardComponent={Item} />
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
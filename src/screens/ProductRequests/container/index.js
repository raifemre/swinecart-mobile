import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, View, Right, Left } from 'native-base';
import { NavigationEvents } from 'react-navigation';

import {
  observer, inject
} from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import BackButton from '../../../shared/BackButton';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import Requests from '../components/Requests';

@inject('InventoryStore')
@observer
class ProductRequests extends Component {

  getRequests = () => {
    const { navigation, InventoryStore } = this.props;
    const { id } = navigation.getParam('product');
    InventoryStore.getRequests(id);
  }

  resetRequests = () => {
    this.props.InventoryStore.clearRequests();
  }

  render() {

    const { contentStyle } = styles;

    const { navigation, InventoryStore } = this.props;
    const { name } = navigation.getParam('product');

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={InventoryStore.reserveLoading} />
        <NavigationEvents
          onDidFocus={this.getRequests}
          onWillBlur={this.resetRequests}
        />
        <Container>
          <HeaderWrapper>
            <Left style={[contentStyle]}>
              <BackButton />
            </Left>
            <BodyWrapper 
              title={`Requests for ${name}`}
            />
            <Right />
          </HeaderWrapper>
          <View style={[contentStyle, { padding: 10 }]}>
            <Requests />
          </View>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
  }
});

export default ProductRequests;
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
  Container, View, Right, Left
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import BackButton from '../../../shared/BackButton';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import Requests from '../components/Requests';

@inject('UserStore', 'DashboardStore')
@observer
class ProductRequests extends Component {

  componentDidMount() {
    this.props.DashboardStore.getProductRequests();
  }

  componentWillUnmount() {
    const { DashboardStore } = this.props;
    DashboardStore.setSelectedProduct(null);
    DashboardStore.clearProductRequests();
  }

  render() {

    const { contentStyle } = styles;
    const { DashboardStore } = this.props;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={DashboardStore.loading} />
        <Container>
          <HeaderWrapper>
            <Left style={[contentStyle]}>
              <BackButton />
            </Left>
            <BodyWrapper 
              title={`${DashboardStore.selectedProduct.name} Product Requests`}
            />
            <Right />
          </HeaderWrapper>
          <View style={[contentStyle, { padding: 15 }]}>
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
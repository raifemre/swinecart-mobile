import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
  Container, View, Body, Title, Icon, Left, Button, Right, Text,
  Content, ListItem, Radio
} from 'native-base';

import { observer, inject } from 'mobx-react';

import { Navigation } from '../../../services';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import BackButton from '../../../shared/BackButton';
import TextWrapper from '../../../shared/TextWrapper';

import RadioPicker from '../components/RadioPicker';

@inject('ShopStore')
@observer
class FilterProductsCustomer extends Component {

  state = {
    types: [],
    breeds: []
  }

  clearFilters = async () => {
    this.setState({
      type: [],
      breed: []
    });
    this.props.ShopStore.getProducts();
    Navigation.back();
  }

  filterProducts = async () => {
    const { types, breeds } = this.state;
    this.props.ShopStore.filterProducts(types, breeds);
    Navigation.back();
  }

  onTypeChange = type => {
    const array = [...this.state.types]
    const index = array.indexOf(type);

    if (index === -1) {
      array.push(type);
      this.setState({
        types: array
      });
    }
    else {
      array.splice(index, 1);
      this.setState({
        types: array
      });
    }
  }

  onBreedChange = breeds => {
    this.setState({
      breeds
    });
  }

  render() {

    const {
      openSansBold, contentStyle, modalContent, flatButton
    } = styles;

    return (
      <Container>
        <HeaderWrapper>
          <Left style={[contentStyle]}>
            <BackButton />
          </Left>
          <BodyWrapper title='Filter Products' />
          <Right />
        </HeaderWrapper>
        <Content padder>
          <View style={[modalContent]}>
            <View>
              <RadioPicker label='Type' data={['Boar', 'Sow', 'Semen', 'Gilt']} selected={this.state.types} onChange={this.onTypeChange} />
            </View>

            <Button
              block
              onPress={this.clearFilters}
              style={[flatButton, { backgroundColor: '#eee', marginTop: 15 }]}
            >
              <Text uppercase={false} style={[openSansBold, { fontSize: 16, color: '#000000' }]}>Clear Filters</Text>
            </Button>
            <Button
              block
              onPress={this.filterProducts}
              style={[flatButton, { backgroundColor: '#00af66', marginTop: 15 }]}
            >
              <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>Filter Products</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold'
  },
  openSansSemiBold: {
    fontFamily: 'OpenSans-SemiBold'
  },
  modalContent: {
    backgroundColor: "white",
    padding: 18,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
});


export default FilterProductsCustomer;
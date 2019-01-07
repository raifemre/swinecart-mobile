import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
  Container, View, Header, Body, Title, Icon, Left, Button, Right, Text,
  Content
} from 'native-base';

import { observer, inject } from 'mobx-react';

import { Navigation } from '../../../services';
import StyleProviderWrapper from '../../../shared/StyleProviderWrapper';

import Dropdown from '../components/Dropdown';

@inject('ProductsStore')
@observer
class FilterProducts extends Component {

  clearFilters = async () => {
    const { ProductsStore } = this.props;
    ProductsStore.resetData('filters');
    await ProductsStore.getProducts();
  }

  filterProducts = async () => {
    await this.props.ProductsStore.filterProducts();
    Navigation.back();
  }

  render() {

    const {
      openSansBold, contentStyle, modalContent, flatButton
    } = styles;

    const { ProductsStore } = this.props;

    return (
      <StyleProviderWrapper>
        <Container>
          <Header noShadow androidStatusBarColor='#ffffff'>
            <Left style={[contentStyle]}>
              <Button transparent onPress={Navigation.back}>
                <Icon type='Feather' name='arrow-left' style={{ color: '#000000' }} />
              </Button>
            </Left>
            <Body style={{ flex: 1, alignItems: 'center' }}>
              <Title style={[openSansBold, { color: '#000000' }]}>
                Filter
              </Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <View style={[modalContent]}>
              <Dropdown
                label='Type'
                selectedValue={ProductsStore.filters.type}
                onValueChange={value => ProductsStore.setFilterValue('type', value)}
                data={[
                  { label: 'All', value: 'all' },
                  { label: 'Boar', value: 'boar' },
                  { label: 'Sow', value: 'sow' },
                  { label: 'Gilt', value: 'gilt' },
                  { label: 'Semen', value: 'semen' }
                ]}
              />
              <Dropdown
                label='Status'
                selectedValue={ProductsStore.filters.status}
                onValueChange={value => ProductsStore.setFilterValue('status', value)}
                data={[
                  { label: 'All', value: 'all' },
                  { label: 'Displayed', value: 'displayed' },
                  { label: 'Hidden', value: 'hidden' },
                  { label: 'Requested', value: 'requested' },
                ]}
              />
              <Dropdown
                label='Sort By'
                selectedValue={ProductsStore.filters.sort}
                onValueChange={value => ProductsStore.setFilterValue('sort', value)}
                data={[
                  { label: 'Relevance', value: 'none' },
                  { label: 'Age: High to Low', value: 'birthdate-asc' },
                  { label: 'Age: Low to High', value: 'birthdate-desc' },
                  { label: 'Average Daily Gain', value: 'adg-desc' },
                  { label: 'Feed Conversion Ratio', value: 'fcr-desc' },
                  { label: 'Backfat Thickness', value: 'backfat_thickness-asc' },
                ]}
              />
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
      </StyleProviderWrapper>
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


export default FilterProducts;
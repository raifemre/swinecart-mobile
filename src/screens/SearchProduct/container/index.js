import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, View, Input, Item, Icon, Left, Body } from 'native-base';

import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BackButton from '../../../shared/BackButton';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

@inject('ShopStore')
@observer
class SearchProduct extends Component {

  componentDidMount() {
  }

  render() {

    const { contentStyle } = styles;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={false} />
        <Container>
          <HeaderWrapper searchBar rounded>
            <Left>
              <BackButton />
            </Left>
            <Item style={{ flex: 3 }}>
              <Icon name='ios-search' />
              <Input placeholder='Search' onFocus={this.handleOnFocus} />
            </Item>
          </HeaderWrapper>
          <View style={[contentStyle, { paddingTop: 16 }]}>
          </View>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
});

export default SearchProduct;
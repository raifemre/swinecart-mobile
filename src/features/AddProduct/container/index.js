import React, { Component } from 'react';
import { Container, View, Left, Right } from 'native-base';
import { observer, inject } from 'mobx-react';
import { NavigationEvents } from 'react-navigation';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import BackButton from '../../../shared/BackButton';

import ProductForm from '../components/ProductForm';

@inject('ProductsStore')
@observer
class AddProduct extends Component {

  initializeForm = () => {

  }

  render() {    
    return (
      <React.Fragment>
        <NavigationEvents
          onDidFocus={this.initializeForm}
        />
        <Container>
          <HeaderWrapper>
            <Left style={{ flex: 1 }}>
              <BackButton />
            </Left>
            <BodyWrapper title='Add Product' />
            <Right />
          </HeaderWrapper>
          <View style={{ flex: 1 }}>
            <ProductForm />
          </View>
        </Container>
      </React.Fragment>
    );
  }
}

export default AddProduct;
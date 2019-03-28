import React, { Component } from 'react';
import { Container, Left, Right, Content } from 'native-base';
import { observer, inject } from 'mobx-react';
import { NavigationEvents } from 'react-navigation';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import BackButton from '../../../shared/BackButton';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import ProductForm from '../components/ProductForm';

@inject('AddProductForm')
@observer
class AddProduct extends Component {

  initializeForm = () => {

  }

  render() {    
    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={this.props.AddProductForm.loading} />
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
          <Content contentContainerStyle={{ flex: 1 }}>
            <ProductForm />
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

export default AddProduct;
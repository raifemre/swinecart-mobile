import React, { Component } from 'react';
import { Container, Left, Right, Content } from 'native-base';
import { observer, inject } from 'mobx-react';
import { NavigationEvents } from 'react-navigation';


import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import BackButton from '../../../shared/BackButton';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import ProductForm from '../components/ProductForm'; 
import ProductsStore from '../../../mobx/stores/ProductsStore';

@inject('EditProductForm', 'ProductsStore')
@observer
class EditProduct extends Component {

  setFormData = async () => {
    const { navigation, EditProductForm } = this.props;
    const { id } = navigation.getParam('product');
    const product = await ProductsStore.getProductDetails(id);
    EditProductForm.setFormData(product);
    ProductsStore.selectProduct(product);
  }

  resetForm = () => {
    const { EditProductForm } = this.props;
    ProductsStore.selectProduct(null);
    EditProductForm.resetForm();
  }

  render() {

    return (
      <React.Fragment>
        <NavigationEvents
          onWillFocus={this.setFormData}
          onWillBlur={this.resetForm}
        />
        <SpinnerWithOverlay visible={this.props.EditProductForm.loading} />
        <Container>
          <HeaderWrapper>
            <Left style={{ flex: 1 }}>
              <BackButton />
            </Left>
            <BodyWrapper title='Edit Product' />
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

export default EditProduct;
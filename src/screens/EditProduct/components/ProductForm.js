import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Wizard from '../../../shared/Wizard';
import LoadingView from '../../../shared/LoadingView';


import ProductInfoStep from './ProductInfoStep';
import SwineInfoStep from './SwineInfoStep';
import OtherDetailsStep from './OtherDetailsStep';

@inject('EditProductForm', 'ProductsStore')
@observer
class ProductForm extends Component {

  onSubmitForm = async () => {
    const { EditProductForm } = this.props;
    await EditProductForm.submitForm();
  }

  render() {

    const { EditProductForm, ProductsStore } = this.props;

    const steps = [
      { component: ProductInfoStep, routeName: 'Step1' },
      { component: SwineInfoStep, routeName: 'Step2' },
      { component: OtherDetailsStep, routeName: 'Step3' },
    ];

    if (ProductsStore.product) {
      return (
        <Wizard
          form={EditProductForm}
          onSubmitForm={this.onSubmitForm}
          steps={steps}
          lastStepText='Finish Editing'
        />
      );
    }
    else {
      return (
        <LoadingView />
      );
    }
  }

}

export default ProductForm;
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Wizard from '../../../shared/Wizard';

import ProductInfoStep from './ProductInfoStep';
import SwineInfoStep from './SwineInfoStep';
@inject('AddProductForm')
@observer
class ProductForm extends Component {

  onSubmitForm = () => {

  }

  onPressNext = () => {
    alert('hello');
  }

  render() {

    const { AddProductForm } = this.props;

    const steps = [
      // { component: SwineInfoStep, routeName: 'Step1' },
      // { component: ProductInfoStep, routeName: 'Step2' },
      { component: SwineInfoStep, routeName: 'Step1' },
      // { component: ProductInfoStep, routeName: 'Step3' },
    ];

    return (
      <Wizard
        form={AddProductForm}
        onSubmitForm={this.onSubmitForm}
        onPressNext={this.onPressNext}
        steps={steps}
      />
    );
  }

}

export default ProductForm;
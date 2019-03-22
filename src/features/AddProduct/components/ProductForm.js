import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Wizard from '../../../shared/Wizard';

import SwineInfoStep from './SwineInfoStep';
import FormStep from './FormStep';

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
      { component: SwineInfoStep, routeName: 'Step1' },
      { component: SwineInfoStep, routeName: 'Step2' },
      { component: SwineInfoStep, routeName: 'Step3' },
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
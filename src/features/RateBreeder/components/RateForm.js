import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View } from 'native-base';
import { observer, inject } from 'mobx-react';

import TextWrapper from '../../../shared/TextWrapper';
import TextAreaWrapper from '../../../shared/TextAreaWrapper';
import ButtonWrapper from '../../../shared/ButtonWrapper';

import Rating from './Rating';

@inject('SwineCartStore', 'RateBreederForm')
@observer
class RateForm extends Component {

  onPressSubmit = () => {
    const { breeder, item, RateBreederForm } = this.props;
    RateBreederForm.submitForm(breeder, item);
  }

  render() {

    const { RateBreederForm } = this.props;

    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View>
          <Rating form={RateBreederForm} field='delivery' placeholder='Delivery' />
          <Rating form={RateBreederForm} field='transaction' placeholder='Transaction' />
          <Rating form={RateBreederForm} field='productQuality' placeholder='Product Quality' />
        </View>
        <View style={{ flex: 1, marginTop: 10 }}>
          <TextWrapper
            text={'Message / Special Request'}
            font='OpenSans-Bold'
            color='#000000'
            size={12}
          />
          <TextAreaWrapper
            form={RateBreederForm}
            field='specialRequest'
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <ButtonWrapper
            onPress={this.onPressSubmit}
            text='Submit'
            textColor='#ffffff'
            textSize={16}
          />
        </View>
      </ScrollView>
    );
  }

}

export default RateForm;
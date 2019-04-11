import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View } from 'native-base';
import { observer, inject } from 'mobx-react';

import TextWrapper from '../../../shared/TextWrapper';
import TextAreaWrapper from '../../../shared/TextAreaWrapper';
import ButtonWrapper from '../../../shared/ButtonWrapper';
import DatePickerWrapper from '../../../shared/DatePickerWrapper';

import InfoMessage from './InfoMessage';
import WarningMessage from './WarningMessage';

@inject('SwineCartStore', 'RequestItemForm')
@observer
class RequestForm extends Component {


  maxDate = () => {

  }

  onPressRequest = () => {
    this.props.RequestItemForm.submitForm();
  }

  render() {

    const { item, RequestItemForm } = this.props;
    const { product } = item;
    const { name, type } = product;

    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View>
          <InfoMessage name={name} />
          <WarningMessage type={type} />
        </View>
        <View>
          <DatePickerWrapper
            form={RequestItemForm}
            minDate={new Date()}
            placeholder='Date Needed'
            field='dateNeeded'
          />
        </View>
        <View style={{ flex: 1, marginTop: 10 }}>
          <TextWrapper
            text={'Message / Special Request'}
            font='OpenSans-Bold'
            color='#000000'
            size={12}
          />
          <TextAreaWrapper
            form={RequestItemForm}
            field='specialRequest'
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <ButtonWrapper
            onPress={this.onPressRequest}
            buttonColor='#64b5f6'
            text='Confirm Product Request'
            textColor='#ffffff'
            textSize={16}
          />
        </View>
      </ScrollView>
    );
  }

}

export default RequestForm;
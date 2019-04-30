import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View } from 'native-base';
import { observer, inject } from 'mobx-react';

import TextWrapper from '../../../shared/TextWrapper';
import ButtonWrapper from '../../../shared/ButtonWrapper';
import DatePickerWrapper from '../../../shared/DatePickerWrapper';
import { toJS } from 'mobx';

@inject('InventoryStore', 'SendForDeliveryForm')
@observer
class RequestForm extends Component {

  onPressSend = () => {
    const { product, SendForDeliveryForm } = this.props;
    SendForDeliveryForm.submitForm(product);
  }

  render() {

    const { product, SendForDeliveryForm } = this.props;
    const { reservation: { customer_name }, name } = product;

    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View>
          <TextWrapper
            text={`Product ${name} will be to ${customer_name}`}
            font='OpenSans-Bold'
            color='#000000'
            size={18}
            numberOfLines={3}
            style={{ alignSelf: 'center', }}
          />
          <TextWrapper
            text={`delivered on or before:`}
            font='OpenSans-Bold'
            color='#000000'
            size={18}
            numberOfLines={3}
            style={{ alignSelf: 'center', }}
          />
        </View>
        <View>
          <DatePickerWrapper
            form={SendForDeliveryForm}
            minDate={new Date()}
            placeholder='Delivery Date'
            field='deliveryDate'
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <ButtonWrapper
            onPress={this.onPressSend}
            text='Submit'
            textColor='#ffffff'
            textSize={16}
          />
        </View>
      </ScrollView>
    );
  }

}

export default RequestForm;
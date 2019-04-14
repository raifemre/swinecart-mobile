import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View } from 'native-base';
import { observer, inject } from 'mobx-react';
import Divider from 'react-native-divider';

import TextWrapper from '../../../shared/TextWrapper';
import ButtonWrapper from '../../../shared/ButtonWrapper';
import DatePickerWrapper from '../../../shared/DatePickerWrapper';

@inject('InventoryStore', 'SendForDeliveryForm')
@observer
class RequestForm extends Component {

  onPressSend = () => {

  }

  render() {

    const { item, SendForDeliveryForm } = this.props;

    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View>
        </View>
        <Divider orientation='center'>
          <TextWrapper
            color='#7f8c8d'
            text='Send For Delivery Form'
            font='OpenSans-Bold'
            size={14}
          />
        </Divider>
        <View>
          <DatePickerWrapper
            form={SendForDeliveryForm}
            minDate={new Date()}
            placeholder='Date Needed'
            field='dateNeeded'
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <ButtonWrapper
            onPress={this.onPressRequest}
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
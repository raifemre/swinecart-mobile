import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View } from 'native-base';
import { observer, inject } from 'mobx-react';
import Divider from 'react-native-divider';

import TextWrapper from '../../../shared/TextWrapper';
import TextAreaWrapper from '../../../shared/TextAreaWrapper';
import ButtonWrapper from '../../../shared/ButtonWrapper';
import DatePickerWrapper from '../../../shared/DatePickerWrapper';

import InfoMessage from './InfoMessage';
import WarningMessage from './WarningMessage';
import Stepper from './Stepper';

@inject('SwineCartStore', 'RequestItemForm')
@observer
class RequestForm extends Component {

  onPressRequest = () => {
    const { item, RequestItemForm } = this.props;
    RequestItemForm.submitForm(item.id);
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
        <Divider orientation='center'>
          <TextWrapper
            color='#7f8c8d'
            text='Request Form'
            font='OpenSans-Bold'
            size={14}
          />
        </Divider>
        {
          type === 'Semen' &&
            <React.Fragment>
            <View>
              <Stepper form={RequestItemForm} field='requestQuantity' placeholder='Request Quantity' />
            </View>
            <View>
              <DatePickerWrapper
                form={RequestItemForm}
                minDate={new Date()}
                placeholder='Date Needed'
                field='dateNeeded'
              />
            </View>
            </React.Fragment>
        }
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
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View } from 'native-base';
import { observer, inject } from 'mobx-react';

import TextWrapper from '../../../shared/TextWrapper';
import TextField from '../../../shared/TextField';
import IconButton from '../../../shared/IconButton';
import PickerWrapper from '../../../shared/PickerWrapper';
import { toJS } from 'mobx';


@inject('FarmStore', 'AddProductForm')
@observer
class FarmInfo extends Component {
  render() {
    const { FarmStore, AddProductForm } = this.props
    const { farm } = FarmStore;

    return (
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 8,}}>
          <TextWrapper
            text={farm.name}
            font='OpenSans-Bold'
            size={20}
            color='#004d40'
          />
        </View>
        <TextField
          form={AddProductForm}
          placeholder='Address Line 1* : Street, Road, Subdivision'
          field='birthWeight'
        />
        <TextField
          form={AddProductForm}
          placeholder='Address Line 2* : Barangay, Town, City'
          field='birthWeight'
        />
        <PickerWrapper
          form={AddProductForm}
          placeholder='Province'
          field='houseType'
          options={['12321', '1232133']}
          // getLabel={item => item.label}
        />
        <TextField
          form={AddProductForm}
          placeholder='Postal / Zip Code'
          field='birthWeight'
          keyboardType='numeric'
        />
        <TextField
          form={AddProductForm}
          placeholder='Farm Landline'
          field='birthWeight'
          keyboardType='numeric'
        />
        <TextField
          form={AddProductForm}
          placeholder='Farm Mobile'
          field='birthWeight'
          keyboardType='numeric'
        />

      </ScrollView>
    );
  }

}

export default FarmInfo;
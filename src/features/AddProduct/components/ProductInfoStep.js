import React from 'react';
import { ScrollView } from 'react-native';
import { View } from 'native-base';
import { observer, inject } from 'mobx-react';

import TextField from '../../../shared/TextField';
import TextWrapper from '../../../shared/TextWrapper';
import PickerWrapper from '../../../shared/PickerWrapper';
import CheckboxWrapper from '../../../shared/CheckboxWrapper';

function ProductInfoStep({ AddProductForm }) {

  const typeOptions = [
    { 'label': 'Boar', 'data' : 'boar' },
    { 'label': 'Sow', 'data' : 'sow' },
    { 'label': 'Gilt', 'data' : 'gilt' },
    { 'label': 'Semen', 'data' : 'semen' },
  ];

  return (
    <ScrollView 
      style={{ flex: 1, paddingTop: 16, backgroundColor: '#ffffff', paddingHorizontal: 8 }}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 8, }}>
        <TextWrapper
          text='Product Information'
          font='OpenSans-Bold'
          size={20}
          color='#004d40'
        />
      </View>
      <TextField
        form={AddProductForm}
        placeholder='Name'
        field='name'
      />
      <PickerWrapper
        form={AddProductForm}
        placeholder='Type'
        field='type'
        options={typeOptions}
        getLabel={item => item.label}
      />
      {
        AddProductForm.data.type && AddProductForm.data.type.label !== 'Semen' && <React.Fragment>
          <View style={{ marginBottom: 5 }}>
            <TextWrapper
              text='Is this product unique?'
              font='OpenSans-SemiBold'
              size={18}
              color='#004d40'
            />
            <TextWrapper
              text='If any customer buys a unique product, it will disappear upon being sold'
              font='OpenSans-Bold'
              size={14}
              color='#95a5a6'
              numberOfLines={5}
            />
            <CheckboxWrapper
              form={AddProductForm}
              placeholder='Yes, this product is unique'
              field='isUnique'
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <TextWrapper
              text='Quantity of Product to be Added'
              font='OpenSans-SemiBold'
              size={18}
              color='#004d40'
            />
            <TextWrapper
              text='Unique products will always have a quantity of one(1)'
              font='OpenSans-Bold'
              size={14}
              color='#95a5a6'
              numberOfLines={5}
            />
          </View>
          <TextField
            form={AddProductForm}
            placeholder='Quantity'
            field='quantity'
            keyboardType='numeric'
          />
        </React.Fragment>
      }
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, marginBottom: 5 }}>
        <TextWrapper
          text='Price'
          font='OpenSans-SemiBold'
          size={18}
          color='#004d40'
        />
        <TextWrapper
          text=' (Optional)'
          font='OpenSans-Bold'
          size={14}
          color='#95a5a6'
        />
      </View>
      <TextField
        form={AddProductForm}
        placeholder='Minimum Price'
        field='minPrice'
        keyboardType='numeric'
      />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TextWrapper
          text='to'
          font='OpenSans-Bold'
          size={14}
          color='#95a5a6'
        />
      </View>
      <TextField
        form={AddProductForm}
        placeholder='Maximum Price'
        field='maxPrice'
        keyboardType='numeric'
      />
    </ScrollView>
  )
}

export default inject('AddProductForm')(observer(ProductInfoStep));
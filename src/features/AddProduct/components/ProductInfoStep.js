import React from 'react';
import { ScrollView } from 'react-native';
import { View } from 'native-base';
import { observer, inject } from 'mobx-react';

import TextField from '../../../shared/TextField';
import TextWrapper from '../../../shared/TextWrapper';
import PickerWrapper from '../../../shared/PickerWrapper';

function ProductInfoStep({ AddProductForm }) {
  return (
    <ScrollView style={{ flex: 2, paddingTop: 16, backgroundColor: '#ffffff', paddingHorizontal: 8 }}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 8, }}>
        <TextWrapper
          text='Product Information'
          font='OpenSans-Bold'
          size={18}
          color='#004d40'
        />
      </View>
      <TextField
        form={AddProductForm}
        placeholder='Name'
        field='name'
        editable
      />
      <PickerWrapper
        form={AddProductForm}
        placeholder='Type'
        field='type'
      />
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
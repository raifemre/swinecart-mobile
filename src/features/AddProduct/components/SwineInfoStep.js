import React from 'react';
import { ScrollView } from 'react-native';
import { View } from 'native-base';
import { observer, inject } from 'mobx-react';

import TextField from '../../../shared/TextField';
import TextWrapper from '../../../shared/TextWrapper';

function ProductInfoStep({ AddProductForm }) {
  return (
    <ScrollView style={{ flex: 1, paddingTop: 16, backgroundColor: '#ffffff', paddingHorizontal: 8, }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 8, }}>
        <TextWrapper
          text='Swine Information'
          font='OpenSans-Bold'
          size={18}
          color='#004d40'
        />
      </View>
      <TextField
        form={AddProductForm}
        placeholder='Breed'
        field='breed'
      />
      <TextField
        form={AddProductForm}
        placeholder='Type'
        field='type'
      />
      <TextWrapper
        text='Price'
        font='OpenSans-Bold'
        size={18}
        color='#004d40'
      />
      <TextField
        form={AddProductForm}
        placeholder='Min Price'
        field='minPrice'
        keyboardType='numeric'
      />
      <TextField
        form={AddProductForm}
        placeholder='Max Price'
        field='maxPrice'
      />
    </ScrollView>
  )
}

export default inject('AddProductForm')(observer(ProductInfoStep));
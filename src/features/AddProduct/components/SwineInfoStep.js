import React from 'react';
import { ScrollView } from 'react-native';
import { View } from 'native-base';
import { observer, inject } from 'mobx-react';

import TextField from '../../../shared/TextField';
import TextWrapper from '../../../shared/TextWrapper';

function SwineInfoStep({ AddProductForm }) {
  return (
    <ScrollView style={{ flex: 1, paddingTop: 16, backgroundColor: '#ffffff', paddingHorizontal: 8, }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 8, }}>
        <TextWrapper
          text='Swine Information'
          font='OpenSans-Bold'
          size={20}
          color='#000000'
        />
      </View>
      <TextField
        form={AddProductForm}
        placeholder='Name'
        field='name'
      />
      <TextField
        form={AddProductForm}
        placeholder='Type'
        field='type'
      />
    </ScrollView>
  )
}

export default inject('AddProductForm')(observer(SwineInfoStep));
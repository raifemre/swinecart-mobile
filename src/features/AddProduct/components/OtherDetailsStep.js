import React from 'react';
import { observer, inject } from 'mobx-react';
import { ScrollView } from 'react-native';
import { View } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';
import TextAreaWrapper from '../../../shared/TextAreaWrapper';

function otherDetailsStep({ AddProductForm }) {

  return (
    <React.Fragment>
      <ScrollView
        style={{ flex: 1, paddingTop: 16, backgroundColor: '#ffffff', paddingHorizontal: 8, }}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 8, }}>
          <TextWrapper
            text='Other Product Details'
            font='OpenSans-Bold'
            size={20}
            color='#004d40'
          />
        </View>
        <TextAreaWrapper
          form={AddProductForm}
          field='otherDetails'
          placeholder={'Enter other details about the product'}
        />
      </ScrollView>
    </React.Fragment>
  )
}

export default inject('AddProductForm')(observer(otherDetailsStep));



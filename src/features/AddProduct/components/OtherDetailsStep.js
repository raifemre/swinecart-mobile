import React from 'react';
import { observer, inject } from 'mobx-react';
import { ScrollView } from 'react-native';
import { View, Button, Grid, Col } from 'native-base';

import TextField from '../../../shared/TextField';
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
          placeholder='Enter other product details...'
        />
      </ScrollView>
    </React.Fragment>
  )
}

export default inject('AddProductForm')(observer(otherDetailsStep));



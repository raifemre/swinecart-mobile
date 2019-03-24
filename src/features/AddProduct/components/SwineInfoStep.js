import React from 'react';
import { ScrollView } from 'react-native';
import { View, Button, Grid, Col } from 'native-base';
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
      <TextWrapper
        text='Breed Type'
        font='OpenSans-Bold'
        size={14}
        color='#004d40'
      />
      <Grid style={{ marginTop: 10, marginBottom: 20, }}>
        <Col>
          <Button full onPress={() => AddProductForm.setValue('breedType', 'pure')}>
            <TextWrapper
              text='Pure Breed'
              font='OpenSans-Bold'
              size={14}
              color='#ffffff'
            />
          </Button>
        </Col>
        <Col>
          <Button full onPress={() => AddProductForm.setValue('breedType', 'cross')}>
            <TextWrapper
              text='Cross Breed'
              font='OpenSans-Bold'
              size={14}
              color='#ffffff'
            />
          </Button>
        </Col>
      </Grid>
      {
        AddProductForm.form.breedType === 'pure' && 
        <TextField
          form={AddProductForm}
          placeholder='Breed'
          field='breed'
        />
      }
      {
        AddProductForm.form.breedType === 'cross' && 
        <React.Fragment>
          <TextField
            form={AddProductForm}
            placeholder="Father's Breed"
            field='fatherBreed'
          />
          <TextField
            form={AddProductForm}
            placeholder="Mother's Breed"
            field='motherBreed'
          />
        </React.Fragment>
      }
    </ScrollView>
  )
}

export default inject('AddProductForm')(observer(ProductInfoStep));
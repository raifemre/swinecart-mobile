import React from 'react';
import { ScrollView } from 'react-native';
import { View, Button, Grid, Col } from 'native-base';
import { observer, inject } from 'mobx-react';

import TextField from '../../../shared/TextField';
import TextWrapper from '../../../shared/TextWrapper';
import DatePickerWrapper from '../../../shared/DatePickerWrapper';
import PickerWrapper from '../../../shared/PickerWrapper';

function ProductInfoStep({ AddProductForm }) {
  return (
    <React.Fragment>
      <ScrollView 
        style={{ flex: 1, paddingTop: 16, backgroundColor: '#ffffff', paddingHorizontal: 8, }}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 8, }}>
          <TextWrapper
            text='Swine Information'
            font='OpenSans-Bold'
            size={20}
            color='#004d40'
          />
        </View>
        <TextWrapper
          text='Breed Type'
          font='OpenSans-Bold'
          size={16}
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
        <DatePickerWrapper
          form={AddProductForm}
          placeholder='Birth Date'
          field='birthDate'
        />
        <PickerWrapper
          form={AddProductForm}
          placeholder='Farm'
          field='farmFrom'
        />
        <PickerWrapper
          form={AddProductForm}
          placeholder='House Type'
          field='houseType'
        />
        <TextField
          form={AddProductForm}
          placeholder='Average Daily Gain (grams)'
          field='adg'
          keyboardType='numeric'
        />
        <TextField
          form={AddProductForm}
          placeholder='Feed Conversion Ratio'
          field='fcr'
          keyboardType='numeric'
        />
        <TextField
          form={AddProductForm}
          placeholder='Backfat Thickness (millimeters)'
          field='bft'
          keyboardType='numeric'
        />
        <TextField
          form={AddProductForm}
          placeholder='Litter Size (Born Alive)'
          field='lsba'
          keyboardType='numeric'
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, marginBottom: 4 }}>
          <TextWrapper
            text='Number of Teats'
            font='OpenSans-SemiBold'
            size={16}
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
          placeholder='Number of Teats (Left)'
          field='leftTeats'
          keyboardType='numeric'
        />
        <TextField
          form={AddProductForm}
          placeholder='Number of Teats (Right)'
          field='rightTeats'
          keyboardType='numeric'
        />
      </ScrollView>
    </React.Fragment>
  )
}

export default inject('AddProductForm')(observer(ProductInfoStep));
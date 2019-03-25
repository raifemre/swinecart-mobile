import React from 'react';
import { ScrollView } from 'react-native';
import { View, Button, Grid, Col } from 'native-base';
import { observer, inject } from 'mobx-react';

import TextField from '../../../shared/TextField';
import TextWrapper from '../../../shared/TextWrapper';
import DatePickerWrapper from '../../../shared/DatePickerWrapper';
import PickerWrapper from '../../../shared/PickerWrapper';

function ProductInfoStep({ AddProductForm, FarmStore }) {
  
  const houseTypeOptions = [
    { label: 'Tunnel Ventilated', data: 'tunnelventilated' },
    { label: 'Open Sided', data: 'opensided' },
  ];

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
        <Grid style={{ marginTop: 10, marginBottom: 10, }}>
          <Col>
            <Button 
              full
              transparent
              onPress={() => AddProductForm.setValue('breedType', 'pure')}
              style={{ 
                backgroundColor: AddProductForm.form.breedType === 'pure' ? '#00695C' : '#ffffff',
                borderWidth: 2,
                borderColor: '#00695C',
                borderBottomLeftRadius: 5,
                borderTopLeftRadius: 5,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
              }}
              >
              <TextWrapper
                text='Pure Breed'
                font='OpenSans-Bold'
                size={14}
                color={AddProductForm.form.breedType === 'pure' ? '#ffffff' : '#00695C' }
            />
            </Button>
          </Col>
          <Col>
            <Button
              full
              transparent
              onPress={() => AddProductForm.setValue('breedType', 'cross')}
              style={{ 
                backgroundColor: AddProductForm.form.breedType === 'pure' ? '#ffffff' : '#00695C',
                borderWidth: 2,
                borderColor: '#00695C',
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
                borderBottomRightRadius: 5,
                borderTopRightRadius: 5,
              }}
            >
              <TextWrapper
                text='Cross Breed'
                font='OpenSans-Bold'
                size={14}
                color={AddProductForm.form.breedType === 'pure' ? '#00695C' : '#ffffff' }
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
        <TextField
          form={AddProductForm}
          placeholder='Birth Weight'
          field='birthWeight'
          keyboardType='numeric'
        />
        <PickerWrapper
          form={AddProductForm}
          placeholder='Farm From'
          field='farmFrom'
          options={FarmStore.farms}
          getLabel={item => `${item.name}, ${item.province}`}
        />
        <PickerWrapper
          form={AddProductForm}
          placeholder='House Type'
          field='houseType'
          options={houseTypeOptions}
          getLabel={item => item.label}
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


export default inject('AddProductForm', 'FarmStore')(observer(ProductInfoStep));
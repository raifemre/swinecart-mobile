import React from 'react';
import { ScrollView } from 'react-native';
import { View, Button, Grid, Col } from 'native-base';
import { observer, inject } from 'mobx-react';

import TextField from '../../../shared/TextField';
import TextWrapper from '../../../shared/TextWrapper';
import DatePickerWrapper from '../../../shared/DatePickerWrapper';
import PickerWrapper from '../../../shared/PickerWrapper';

function ProductInfoStep({ EditProductForm, FarmStore }) {
  
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
        <Grid style={{ marginTop: 10, marginBottom: 20 }}>
          <Col>
            <Button 
              full
              transparent
              onPress={() => EditProductForm.setValue('breedType', 'pure')}
              style={{ 
                backgroundColor: EditProductForm.data.breedType === 'pure' ? '#00695C' : '#ffffff',
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
                color={EditProductForm.data.breedType === 'pure' ? '#ffffff' : '#00695C' }
            />
            </Button>
          </Col>
          <Col>
            <Button
              full
              transparent
              onPress={() => EditProductForm.setValue('breedType', 'cross')}
              style={{ 
                backgroundColor: EditProductForm.data.breedType === 'pure' ? '#ffffff' : '#00695C',
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
                color={EditProductForm.data.breedType === 'pure' ? '#00695C' : '#ffffff' }
              />
            </Button>
          </Col>
        </Grid>
        {
          EditProductForm.data.breedType === 'pure' &&
          <TextField
            form={EditProductForm}
            placeholder='Breed'
            field='breed'
          />
        }
        {
          EditProductForm.data.breedType === 'cross' &&
          <React.Fragment>
            <TextField
              form={EditProductForm}
              placeholder="Father's Breed"
              field='fatherBreed'
            />
            <TextField
              form={EditProductForm}
              placeholder="Mother's Breed"
              field='motherBreed'
            />
          </React.Fragment>
        }
        <DatePickerWrapper
          form={EditProductForm}
          placeholder='Birth Date'
          field='birthDate'
          maxDate={new Date()}
        />
        <TextField
          form={EditProductForm}
          placeholder='Birth Weight'
          field='birthWeight'
          keyboardType='numeric'
        />
        <PickerWrapper
          form={EditProductForm}
          placeholder='Farm From'
          field='farmFrom'
          options={FarmStore.farms}
          getLabel={item => `${item.name}, ${item.province}`}
        />
        <PickerWrapper
          form={EditProductForm}
          placeholder='House Type'
          field='houseType'
          options={houseTypeOptions}
          getLabel={item => item.label}
        />
        <TextField
          form={EditProductForm}
          placeholder='Average Daily Gain (grams)'
          field='adg'
          keyboardType='numeric'
        />
        <TextField
          form={EditProductForm}
          placeholder='Feed Conversion Ratio'
          field='fcr'
          keyboardType='numeric'
        />
        <TextField
          form={EditProductForm}
          placeholder='Backfat Thickness (millimeters)'
          field='bft'
          keyboardType='numeric'
        />
        <TextField
          form={EditProductForm}
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
          form={EditProductForm}
          placeholder='Number of Teats (Left)'
          field='leftTeats'
          keyboardType='numeric'
        />
        <TextField
          form={EditProductForm}
          placeholder='Number of Teats (Right)'
          field='rightTeats'
          keyboardType='numeric'
        />
      </ScrollView>
    </React.Fragment>
  )
}


export default inject('EditProductForm', 'FarmStore')(observer(ProductInfoStep));
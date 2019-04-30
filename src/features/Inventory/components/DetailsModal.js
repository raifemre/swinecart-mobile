import React from 'react';
import { ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import { View, } from 'native-base';
import Modal from 'react-native-modal';

import TextWrapper from '../../../shared/TextWrapper';
import ButtonWrapper from '../../../shared/ButtonWrapper';

function DetailsModal({ isModalVisible, hideModal, reservation }) {

  const { customer_name, date_needed, quantity, special_request } = reservation;

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={hideModal}
      useNativeDriver={true}
    >
      <View style={{ backgroundColor: '#ffffff', padding: 16, height: 300, borderRadius: 5, }}>
        <ScrollView style={{ height: 200 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextWrapper
              font={'OpenSans-Bold'}
              color={'#000000'}
              text={'Customer Name: '}
              size={12}
            />
            <TextWrapper
              font={'OpenSans-Bold'}
              color={'#7f8c8d'}
              text={customer_name}
              size={12}
              numberOfLines={5}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextWrapper
              font={'OpenSans-Bold'}
              color={'#000000'}
              text={'Date Needed: '}
              size={12}
            />
            <TextWrapper
              font={'OpenSans-Bold'}
              color={'#7f8c8d'}
              text={date_needed}
              size={12}
              numberOfLines={5}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextWrapper
              font={'OpenSans-Bold'}
              color={'#000000'}
              text={'Request Quantity: '}
              size={12}
            />
            <TextWrapper
              font={'OpenSans-Bold'}
              color={'#7f8c8d'}
              text={quantity}
              size={12}
              numberOfLines={5}
            />
          </View>
          <TextWrapper
            font={'OpenSans-Bold'}
            color={'#000000'}
            text={'Special Request:'}
            size={12}
          />
          <TextWrapper
            font={'OpenSans-Bold'}
            color={'#7f8c8d'}
            text={special_request}
            size={12}
            numberOfLines={99}
          />
        </ScrollView>
        <ButtonWrapper
          onPress={hideModal}
          text='Close'
          textColor='#000000'
          buttonColor='#f2f2f2'
          textSize={12}
          style={{ height: 30, marginTop: 10, }}
        />
      </View>
    </Modal>
  );
}

export default observer(DetailsModal);
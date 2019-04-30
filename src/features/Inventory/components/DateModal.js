import React from 'react';
import { observer } from 'mobx-react';
import { View, } from 'native-base';
import Modal from 'react-native-modal';

import TextWrapper from '../../../shared/TextWrapper';
import ButtonWrapper from '../../../shared/ButtonWrapper';

function DateModal({ isModalVisible, hideModal, product, reservation }) {

  const { customer_name } = reservation;
  const { name } = product

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={hideModal}
      useNativeDriver={true}
    >
      <View style={{ backgroundColor: '#ffffff', padding: 16 }}>
        <View>
          <TextWrapper
            font={'OpenSans-Bold'}
            color={'#000000'}
            text={`Deliver ${name} to ${customer_name}?`}
            size={14}
          />
        </View>
        <View>
          <TextWrapper
            font={'OpenSans-Bold'}
            color={'#000000'}
            text={'Product wil be delivered on or before: '}
            size={12}
          />
        </View>
        <View style={{ flexDirection: 'row', }}>
          <ButtonWrapper
            onPress={hideModal}
            text='Close'
            textColor='#ffffff'
            textSize={12}
            style={{ height: 30, marginRight: 5, flex: 1 }}
          />
          <ButtonWrapper
            onPress={hideModal}
            text='Close'
            textColor='#ffffff'
            textSize={12}
            style={{ height: 30, marginLeft: 5, flex: 1 }}
          />
        </View>
      </View>
    </Modal>
  );
}

export default observer(DateModal);
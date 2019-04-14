import React from 'react';
import { observer } from 'mobx-react';
import { View } from 'native-base';
import Modal from 'react-native-modal';

import TextWrapper from '../../../shared/TextWrapper';
import ButtonWrapper from '../../../shared/ButtonWrapper';

function RemoveConfirmModal(props) {

    const {
      isVisible, onBackdropPress, product, onPressCancel, onPressOkay
    } = props;

    return (
      <Modal
        useNativeDriver={true}
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
      >
        <View style={{ backgroundColor: '#ffffff', borderRadius: 5 }}>
          <View style={{ padding: 10, }}>
            <TextWrapper
              text={'Delete Product?'}
              font='OpenSans-Bold'
              color='#000000'
              size={15}
            />
            <TextWrapper
              text={`Removing ${product.name} will be removed from your Swine Cart. `}
              font='OpenSans-SemiBold'
              color='#2e3131'
              size={13}
              numberOfLines={3}
            />
          </View>
          <View style={{ flexDirection: 'row', padding: 10, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
            <ButtonWrapper
              onPress={onPressCancel}
              text='No'
              buttonColor='#f2f2f2'
              textColor='#000000'
              textSize={12}
              style={{ height: 24, flex: 1, marginRight: 5, }}
            />
            <ButtonWrapper
              onPress={onPressOkay}
              buttonColor='#64b5f6'
              text='Remove the Product'
              textColor='#ffffff'
              textSize={12}
              style={{ height: 24, flex: 1, marginLeft: 5 }}
            />
          </View>
        </View>
      </Modal>

    );

}

export default observer(RemoveConfirmModal);
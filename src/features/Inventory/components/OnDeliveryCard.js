import React from 'react';
import { observer, inject } from 'mobx-react';
import { Body, View } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';
import CardItemHeader from '../../../shared/CardItemHeader';
import CardWrapper from '../../../shared/CardWrapper';
import CardItemBody from '../../../shared/CardItemBody';
import CardItemFooter from '../../../shared/CardItemFooter';
import ButtonWrapper from '../../../shared/ButtonWrapper';

import { Navigation } from '../../../services';


function OnDeliveryCard({ InventoryStore, product }) {

  const { id, name, img_path, type, breed, reservation } = product;
  const { customer_name, status_time, delivery_date } = reservation;

  const onPressConfirm = async () => {
    await InventoryStore.confirmSold(product);
  }

  const onPressCancel = async () => {
    await InventoryStore.cancelTransaction('on_delivery', product);
  }

  return (
    <CardWrapper>
      <CardItemHeader uri={img_path} />
      <CardItemBody>
        <Body>
          <View style={{ marginBottom: 5, }}>
            <TextWrapper
              text={name}
              font='OpenSans-Bold'
              color='#2e3131'
              size={13}
            />
            <TextWrapper
              text={`${type} - ${breed}`}
              font='OpenSans-SemiBold'
              color='#2e3131'
              size={11}
            />
          </View>
          <View style={{ marginBottom: 10, }}>
            <TextWrapper
              text={`Reserved to ${customer_name}`}
              font='OpenSans-Bold'
              color='#2e3131'
              size={10}
            />
            <TextWrapper
              text={`${status_time}`}
              font='OpenSans-Bold'
              color='#2e3131'
              size={9}
            />
            <TextWrapper
              text={`Expected to arrive on ${delivery_date}`}
              font='OpenSans-Bold'
              color='#2e3131'
              size={9}
              numberOfLines={5}
            />
          </View>
        </Body>
      </CardItemBody>
      <CardItemFooter>
        <View style={{ flex: 1, flexDirection: 'row', }}>
          <ButtonWrapper
            onPress={onPressConfirm}
            buttonColor='#00695C'
            text='Confirm'
            textColor='#ffffff'
            textSize={12}
            style={{ height: 24, flex: 1, marginRight: 2, }}
          />
          <ButtonWrapper
            onPress={onPressCancel}
            text='Cancel'
            buttonColor='#f44336'
            textColor='#ffffff'
            textSize={12}
            style={{ height: 24, flex: 1, marginLeft: 2, }}
          />
        </View>
      </CardItemFooter>
    </CardWrapper>
  );
}

export default inject('InventoryStore')(observer(OnDeliveryCard));
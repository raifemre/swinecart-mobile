import React from 'react';
import { observer } from 'mobx-react';
import { Body, View } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';
import CardItemHeader from '../../../shared/CardItemHeader';
import CardWrapper from '../../../shared/CardWrapper';
import CardItemBody from '../../../shared/CardItemBody';
import CardItemFooter from '../../../shared/CardItemFooter';
import ButtonWrapper from '../../../shared/ButtonWrapper';

import { Navigation } from '../../../services';

function RequestedCard({ product }) {

  const { id, name, img_path, type, breed } = product;

  const onPress = () => {
    Navigation.navigate('ProductRequests', { product });
  }

  return (
    <CardWrapper>
      <CardItemHeader uri={img_path} />
      <CardItemBody>
        <Body>
          <TextWrapper
            text={name}
            font='OpenSans-Bold'
            color='#2e3131'
            size={13}
            style={{ flex: 1 }}
          />
          <TextWrapper
            text={`${type} - ${breed}`}
            font='OpenSans-SemiBold'
            color='#2e3131'
            size={11}
          />
        </Body>
      </CardItemBody>
      <CardItemFooter>
        <View style={{ flex: 1 }}>
          <ButtonWrapper
            onPress={onPress}
            text='View Requests'
            textColor='#ffffff'
            textSize={12}
            style={{ height: 24 }}
          />
        </View>
      </CardItemFooter>
    </CardWrapper>
  );
}

export default observer(RequestedCard);
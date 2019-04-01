import React from 'react';
import { observer } from 'mobx-react';
import { Body, View } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';
import CardItemHeader from '../../../shared/CardItemHeader';
import CardWrapper from '../../../shared/CardWrapper';
import CardItemBody from '../../../shared/CardItemBody';
import CardItemFooter from '../../../shared/CardItemFooter';

function RequestedCard() {

  const { name, img_path, type, breed } = this.props.product;

  return (
    <CardWrapper>
      <CardItemHeader uri={img_path} />
      <CardItemBody>
        <Body>
          <View style={{ flexDirection: 'row' }}>
            <TextWrapper
              text={name}
              font='OpenSans-Bold'
              color='#2e3131'
              size={13}
              style={{ flex: 1 }}
            />
          </View>
          <TextWrapper
            text={`${type} - ${breed}`}
            font='OpenSans-SemiBold'
            color='#2e3131'
            size={11}
          />
        </Body>
      </CardItemBody>
      <CardItemFooter>
      </CardItemFooter>
    </CardWrapper>
  );
}

export default observer(RequestedCard);
import React from 'react'
import { observer } from 'mobx-react';

import { View } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';

function InfoMessage({ name }) {
  return (
    <View>
      <TextWrapper
        text={`Requesting Product ${name}`}
        font='OpenSans-Bold'
        color='#000000'
        size={14}
        numberOfLines={3}
        style={{ alignSelf: 'center', }}
      />
      <TextWrapper
        text={'sends a request to the breeder for buying the product. '}
        font='OpenSans-Bold'
        color='#000000'
        size={14}
        numberOfLines={3}
        style={{ alignSelf: 'center', }}
      />
    </View>
  );
}

export default observer(InfoMessage);
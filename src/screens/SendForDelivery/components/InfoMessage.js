import React from 'react'
import { observer } from 'mobx-react';

import { View } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';

function InfoMessage() {
  return (
    <View>
      <TextWrapper
        text={'Product will be delivered on or before:'}
        font='OpenSans-Bold'
        color='#000000'
        size={16}
        numberOfLines={3}
        style={{ alignSelf: 'center', }}
      />
    </View>
  );
}

export default observer(InfoMessage);
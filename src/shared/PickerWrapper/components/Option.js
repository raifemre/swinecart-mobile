import React from 'react';
import { observer } from 'mobx-react';
import { View } from 'native-base';

import TextWrapper from '../../TextWrapper';

function Input({ settings }) {

  const { getLabel, item } = settings;

  return (
    <View style={{ padding: 8, borderBottomWidth: 2, borderBottomColor: '#2d3436', }}>
      <TextWrapper
        text={getLabel(item)}
        font='OpenSans-SemiBold'
        size={18}
        color={'#2d3436'}
      />
    </View>
  )
}

export default observer(Input);
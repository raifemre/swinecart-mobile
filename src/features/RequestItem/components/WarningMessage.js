import React from 'react'
import { observer } from 'mobx-react';

import { View } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';

function WarningMessage({ type }) {
  if (type === 'Semen') {
    return (
      <View style={{ marginVertical: 10, backgroundColor: 'rgba(255, 205, 210, 1)', borderLeftColor: '#ff0000', borderLeftWidth: 3 }}>
        <TextWrapper
          text={'Once requested, request quantity can never be changed.'}
          font='OpenSans-Bold'
          color='#000000'
          size={12}
          numberOfLines={3}
          style={{ alignSelf: 'center', }}
        />
        <TextWrapper
          text={'Also, this product cannot be removed from the'}
          font='OpenSans-Bold'
          color='#000000'
          size={12}
          numberOfLines={3}
          style={{ alignSelf: 'center', }}
        />
        <TextWrapper
          text={'Swine Cart unless it will be reserved to another customer. '}
          font='OpenSans-Bold'
          color='#000000'
          size={12}
          numberOfLines={3}
          style={{ alignSelf: 'center', }}
        />
      </View>
    );
  }

  else {
    return (
      <View style={{ marginVertical: 10, backgroundColor: 'rgba(255, 205, 210, 1)', borderLeftColor: '#ff0000', borderLeftWidth: 3 }}>
        <TextWrapper
          text={'Once requested, this product cannot be removed from the'}
          font='OpenSans-Bold'
          color='#000000'
          size={12}
          numberOfLines={3}
          style={{ alignSelf: 'center', }}
        />
        <TextWrapper
          text={'Swine Cart unless it will be reserved to another customer. '}
          font='OpenSans-Bold'
          color='#000000'
          size={12}
          numberOfLines={3}
          style={{ alignSelf: 'center', }}
        />
      </View>
    );
  }

}

export default observer(WarningMessage);
import React from 'react';

import { observer } from 'mobx-react';

import { View } from 'native-base';

import TextWrapper from '../../TextWrapper';

function ErrorMessage({ error }) {
  return (
    <View style={{ paddingLeft: 15 }}>
      <TextWrapper text={error} size={12} color='#db222a' />
    </View>
  );
}

export default observer(ErrorMessage);
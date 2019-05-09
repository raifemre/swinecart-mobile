import React from 'react';
import { observer } from 'mobx-react';
import { View } from 'native-base';

import Text from '../../Text';

function ErrorMessage({ error }) {
  return (
    <View style={{ paddingLeft: 13, marginTop: 5 }}>
      <Text caption color='red'>{error}</Text>
    </View>
  );
}

export default observer(ErrorMessage);
import React from 'react';
import { View } from 'native-base';
import { observer } from 'mobx-react';

import IconButton from '../../IconButton';

function RevealButton(props) {

  const { togglePassword, hidePassword } = props;

  return (
    <View style={{ justifyContent: 'center' }}>
      <IconButton
        marginLeft={5}
        marginRight={5}
        size={24}
        name={hidePassword ? 'eye' : 'eye-off'}
        type='MaterialCommunityIcons'
        onPress={togglePassword}
      />
    </View>
  );

}


export default observer(RevealButton);
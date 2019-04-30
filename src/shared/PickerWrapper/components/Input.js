import React from 'react';
import { observer } from 'mobx-react';
import { View } from 'native-base';

import TextWrapper from '../../TextWrapper';
import IconButton from '../../IconButton';

function Input({ form, field, settings }) {

  const { getLabel, defaultText, clear } = settings;

  const onPress = () => {
    form.setValue(field, null);
    clear();
  }

  return (
    <View style={{ flexDirection: 'row', padding: 0 }}>
      {
        !form.data[field] &&
        <React.Fragment>
          <TextWrapper
            text={defaultText}
            font='OpenSans-Bold'
            size={16}
            color={'#7f8c8d'}
          />
        </React.Fragment>
      }
      {
        form.data[field] &&
        <React.Fragment>
          <View style={{ flex: 1 }}>
            <TextWrapper
              text={getLabel(form.data[field])}
              font='OpenSans-Bold'
              size={16}
              color={'#000000'}
            />
          </View>
          <View>
            <IconButton
              marginLeft={0}
              marginRight={0}
              size={24}
              name='clear'
              type='MaterialIcons'
              onPress={onPress}
            />
          </View>
        </React.Fragment>
      }
    </View>
  )
}

export default observer(Input);
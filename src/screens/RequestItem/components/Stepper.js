import React from 'react';
import { observer } from 'mobx-react';

import { View } from 'native-base';

import { max, min } from 'lodash';

import TextWrapper from '../../../shared/TextWrapper';
import IconButton from '../../../shared/IconButton';

import Placeholder from './Placeholder';

function Stepper({ form, placeholder, field }) {

  decrementValue = () => {
    const { form, field } = this.props;
    const prevVal = form.data[field];
    const newVal = max([prevVal - 2, 2]);
    form.setValue(field, newVal);
  }

  incrementValue = () => {
    const { form, field } = this.props;
    const prevValue = form.data[field];
    form.setValue(field, prevValue + 2);
  }

  return (
    <View style={{ marginTop: 10, marginBottom: 10, }}>
      <View style={{
        padding: 10,  
        borderColor: '#2d3436',
        borderWidth: 1.5,
        height: 42,
        flexDirection: 'row',
        borderRadius: 5
      }}>
        <Placeholder placeholder={placeholder} />
        <View style={{ alignSelf: 'center', flex: 1}}>
          <TextWrapper
            text={form.data[field]}
            font='OpenSans-Bold'
            color='#000000'
            size={16}
          />
        </View>
        <View style={{ flexDirection: 'row', }}>
          <View style={{ alignSelf: 'center', }}>
            <IconButton
              marginLeft={0}
              marginRight={5}
              size={24}
              name='minus'
              color='#000000'
              type='MaterialCommunityIcons'
              onPress={decrementValue}
            />
          </View>
          <View style={{ alignSelf: 'center', }}>
            <IconButton
              marginLeft={5}
              marginRight={0}
              size={24}
              name='add'
              color='#000000'
              type='MaterialIcons'
              onPress={incrementValue}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default observer(Stepper);
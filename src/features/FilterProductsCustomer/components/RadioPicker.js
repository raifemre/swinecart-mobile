import React, { Component } from 'react';
import { View, CheckBox } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';

import RadioButton from './RadioButton';

class RadioPicker extends Component {
  render() {
    const { label, data, onChange } = this.props;
    return (
      <View>
        <TextWrapper size={20} text={label} />
        <View style={{ flexDirection: 'row', marginTop: 16 }}>
          {data.map((d, i) => (
            <RadioButton label={d} key={i} handleOnPress={onChange}/>
          ))}
        </View>
      </View>
    );
  }

}

export default RadioPicker;

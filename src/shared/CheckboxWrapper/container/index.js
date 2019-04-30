import React, { Component } from 'react'
import { View } from 'native-base';
import { observer } from 'mobx-react';
import CheckBox from 'react-native-check-box';

import TextWrapper from '../../TextWrapper';

class CheckBoxWrapper extends Component {


  state = {
    isChecked: false
  }

  onClick = () => {
    const { form, field } = this.props;
    form.setValue(field, !form.data[field]);
  }
  render() {
    const { form, field, placeholder } = this.props;
    return (
      <View style={{ flexDirection: 'row', alignContent: 'center', flex: 1 }}>
        <CheckBox
          onClick={this.onClick}
          isChecked={form.data[field]}
        />
        <TextWrapper
          text={placeholder}
          font='OpenSans-Bold'
          size={14}
          color='#004d40'
          numberOfLines={5}
        />
      </View>
    )
  }

}

export default observer(CheckBoxWrapper);
import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Item, Input, Label, Picker
} from 'native-base';
import {
  observer, inject
} from 'mobx-react';

import {
  toJS
} from 'mobx';

import {
  values
} from 'lodash';

@inject(['UserStore'])
@observer
class FarmField extends Component {

  render() {

    const {
      openSansSemiBold
    } = styles;

    const {
      label, field, isEditable, farm, keyboardType, isPicker, UserStore
    } = this.props;

    const { provinces } = UserStore;
    
    if (isPicker) {
      const ps = values(toJS(provinces));
      return (
        <React.Fragment>
          <Item picker>
            <Label>{label}</Label>
            <Picker
              enabled={isEditable}
              selectedValue={farm.editableData[field]}
              onValueChange={value => farm.setValue(field, value)}
              style={{ marginTop: 15, marginLeft: 15 }}
            >
              {ps.map(p => <Picker.Item style={[openSansSemiBold]} label={p} value={p} key={p} />)}
            </Picker>
          </Item>
        </React.Fragment>
      );
    }
    else {
      return (
        <React.Fragment>
          <Item floatingLabel>
            <Label>{label}</Label>
            <Input
              disabled={!isEditable}
              value={farm.editableData[field]}
              style={[openSansSemiBold]}
              keyboardType={keyboardType}
              onChangeText={value => farm.setValue(field, value)}
            />
          </Item>
        </React.Fragment>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold'
  },
  openSansSemiBold: {
    fontFamily: 'OpenSans-SemiBold'
  },
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
});

export default FarmField;
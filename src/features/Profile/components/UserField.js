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
class UserField extends Component {

  render() {

    const {
      openSansSemiBold
    } = styles;

    const {
      label, field, isEditable, UserStore, keyboardType, isPicker
    } = this.props;
    
    const { breederProfile, provinces } = UserStore;
    const ps = values(toJS(provinces))
    if(isPicker) {
      return (
        <React.Fragment>
          <Item picker>
            <Label>{label}</Label>
            <Picker
              enabled={isEditable}
              selectedValue={breederProfile[field]}
              onValueChange={value => breederProfile.setValue(field, value)}
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
              value={breederProfile[field]}
              style={[openSansSemiBold]}
              keyboardType={keyboardType}
              onChangeText={value => breederProfile.setValue(field, value)}
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

export default UserField;
import React from 'react';

import { StyleSheet } from 'react-native';

import {
  View, Item, Label, Picker, Icon
} from 'native-base';

function Dropdown(props) {

  const {
    selectedValue, data, onValueChange, label
  } = props;

  const { openSansSemiBold } = styles;

  return (
    <View>
      <Item>
        <Label>{label}</Label>
        <Picker
          mode='dropdown'
          iosIcon={<Icon name="ios-arrow-down-outline" />}
          placeholderStyle={[openSansSemiBold]}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          textStyle={[openSansSemiBold]}
          itemTextStyle={[openSansSemiBold]}
        >
          {data.map(({label, value}) => <Picker.Item label={label} value={value} key={value} />)}
        </Picker>
      </Item>
    </View>
  );
}

const styles = StyleSheet.create({
  openSansSemiBold: {
    fontFamily: 'OpenSans-SemiBold'
  }
});

export default Dropdown;
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from 'native-base';
import { observer } from 'mobx-react';
import { CustomPicker } from 'react-native-custom-picker';

import TextWrapper from './TextWrapper';

@observer
class PickerWrapper extends Component {

  state = {
    isFocused: false,
  }

  renderField = settings => {
    const { selectedItem, defaultText, getLabel, clear } = settings;

    return (
      <View style={styles.fieldStyle}>
        <View>
          <TextWrapper
            text={selectedItem ? selectedItem : defaultText}
            font='OpenSans-Bold'
            size={16}
            color='#7f8c8d'
          />
        </View>
      </View>
    );

  }

  onValueChange = value => {
    const { form, field } = this.props;
    form.setValue(field, value);
  }

  render() {

    const options = ['Boar', 'Sow', 'Gilt', 'Semen'];

    const { placeholder, form, field } = this.props;

    return (
      <View style={styles.containerStyle}>
        <View style={{ position: 'absolute', top: -20, left: 10 }}>
          <TextWrapper
            text={placeholder}
            font='OpenSans-Bold'
            size={13}
            color='#000000'
          />
        </View>
        <CustomPicker
          placeholder='Choose'
          fieldTemplate={this.renderField}
          options={options}
          onValueChange={this.onValueChange}
          defaultValue='Choose'
        />
        {
          form.errors[field] !== ''
          &&
          <View style={{ paddingLeft: 10 }}>
            <TextWrapper text={form.errors[field]} size={13} color='#db222a' />
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fieldStyle: {
    borderWidth: 2, height: 40, borderRadius: 5,
    paddingHorizontal: 10, borderColor: '#2d3436',
    justifyContent: 'center'
  },
  containerStyle: {
    marginTop: 10,
    marginBottom: 10,
  }
});

export default PickerWrapper;
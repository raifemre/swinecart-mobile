import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import { observer } from 'mobx-react';
import { CustomPicker } from 'react-native-custom-picker';

import TextWrapper from './TextWrapper';
import IconButton from './IconButton';

@observer
class PickerWrapper extends Component {

  state = {
    isFocused: false,
  }

  renderField = settings => {
    const { selectedItem, defaultText, getLabel, clear } = settings;

    return (
      <View style={styles.fieldStyle}>
        <View style={{ flexDirection: 'row' }}>
          {
            !selectedItem && 
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
            selectedItem &&
            <React.Fragment>
              <IconButton
                marginLeft={0}
                marginRight={0}
                size={24}
                name='clear'
                type='MaterialIcons'
                onPress={clear}
              />
              <TextWrapper
                text={getLabel(selectedItem)}
                font='OpenSans-Bold'
                size={16}
                color={'#000000'}
              />
            </React.Fragment>
          }
        </View>
      </View>
    );

  }

  onValueChange = value => {
    const { form, field } = this.props;
    form.setValue(field, value);
  }

  render() {

    const options = [{
      label: 'Boar',
      id: 1
    }];

    const { placeholder, form, field } = this.props;

    return (
      <View style={styles.containerStyle}>
        {form.form[field] && <View style={{ position: 'absolute', top: -20, left: 10 }}>
          <TextWrapper
            text={placeholder}
            font='OpenSans-Bold'
            size={13}
            color='#000000'
          />
        </View>}
        <CustomPicker
          placeholder={`Choose ${placeholder}`}
          fieldTemplate={this.renderField}
          options={options}
          onValueChange={this.onValueChange}
          getLabel={item => item.label}
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
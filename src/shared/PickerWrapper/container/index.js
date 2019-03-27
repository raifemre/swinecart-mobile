import React, { Component } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { View } from 'native-base';
import { observer } from 'mobx-react';
import { CustomPicker } from 'react-native-custom-picker';


import ErrorMessage from '../components/ErrorMessage';
import Placeholder from '../components/Placeholder';
import Input from '../components/Input';

@observer
class PickerWrapper extends Component {

  componentWillMount() {
    const { form, field } = this.props;
    this.isFocused = new Animated.Value(form.data[field] ? 1 : 0);
  }

  renderField = settings => {
    const { form, field } = this.props;
    return (
      <Input settings={settings} form={form} field={field} />
    );

  }

  onValueChange = value => {
    const { form, field } = this.props;
    form.setValue(field, value);
  }

  render() {

    const { placeholder, form, field, options, getLabel } = this.props;
    const { containerStyle, fieldStyle } = styles;

    const error = form.errors[field];
    const borderColor = error ? '#e74c3c' : '#2d3436';

    const labelStyle = {
      position: 'absolute',
      fontFamily: 'OpenSans-Bold',
      left: 10,
      top: -22,
      fontSize: 12,
      color: '#000000'
    };

    return (
      <View style={containerStyle}>
        <View style={[fieldStyle, { borderColor }]}>
          { form.data[field] && <Placeholder placeholder={placeholder} labelStyle={labelStyle} /> }
          <CustomPicker
            placeholder={`Choose ${placeholder}`}
            fieldTemplate={this.renderField}
            defaultValue={null}
            options={options}
            onValueChange={this.onValueChange}
            getLabel={getLabel}
          />
        </View>
        { error && <ErrorMessage error={error} /> }
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
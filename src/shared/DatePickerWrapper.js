import React, { Component } from 'react';
import { View } from 'native-base';
import { observer } from 'mobx-react';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

import IconButton from './IconButton';
import TextWrapper from './TextWrapper';

@observer
class DatePickerWrapper extends Component {

  formatString = date => {
    return moment(date).format('MMMM D YYYY');
  }
  
  resetValue = () => {
    const { form, field } = this.props;
    form.setValue(field, null);
  }

  onDateChange = value => {
    const { form, field } = this.props;
    form.setValue(field, value);
  }

  render() {
    const { form, field, placeholder, minDate, maxDate } = this.props;

    const error = form.errors[field]
    const borderColor = error ? '#e74c3c' : '#2d3436';
    return (
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <View style={{ borderColor: borderColor, borderWidth: 1.5, borderRadius: 5, flexDirection: 'row',}}>
          <View style={{ flex: 1 }}>
            <DatePicker
              style={{ width: '100%', height: 40 }}
              mode='date'
              date={form.data[field]}
              showIcon={false}
              placeholder={`Choose ${placeholder}`}
              format='MMMM Do YYYY'
              minDate={minDate}
              maxDate={maxDate}
              confirmBtnText='Ok'
              cancelBtnText='Cancel'
              getDateStr={this.formatString}
              customStyles={{
                dateInput: {
                  borderColor: 'transparent',
                  paddingLeft: 10,
                },
                dateText: {
                  fontSize: 16, fontFamily: 'OpenSans-Bold',
                  alignSelf: 'flex-start',
                },
                placeholderText: {
                  fontSize: 16, fontFamily: 'OpenSans-Bold',
                  alignSelf: 'flex-start', color: '#7f8c8d'
                }
              }}
              onDateChange={this.onDateChange}
            />
          </View>
          <View style={{ justifyContent: 'center', alignContent: 'center', }}>
            <IconButton
              marginLeft={0}
              marginRight={10}
              size={24}
              name='close'
              color='#000000'
              type='MaterialCommunityIcons'
              onPress={this.resetValue}
            />
          </View>
        </View>
        {error && <View style={{ paddingLeft: 13 }}>
          <TextWrapper text={error} size={12} color='#db222a' />
        </View>}
      </View>
    );
  }

}

export default DatePickerWrapper;
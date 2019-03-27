import React, { Component } from 'react';
import { View } from 'native-base';
import { observer } from 'mobx-react';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

import TextWrapper from './TextWrapper';

@observer
class DatePickerWrapper extends Component {

  formatString = date => {
    return moment(date).format('MMMM D YYYY');
  }

  onDateChange = value => {
    const { form, field } = this.props;
    form.setValue(field, value);
  }

  render() {
    const { form, field, placeholder } = this.props;

    return (
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <DatePicker
          style={{ width: '100%', height: 40 }}
          mode='date'
          date={form.data[field]}
          showIcon={false}
          placeholder={`Choose ${placeholder}`}
          format='MMMM Do YYYY'
          maxDate={new Date()}
          confirmBtnText='Ok'
          cancelBtnText='Cancel'
          getDateStr={this.formatString}
          customStyles={{
            dateInput: {
              borderColor: '#2d3436', borderWidth: 2, borderRadius: 5,
              padding: 10,
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
    );
  }

}

export default DatePickerWrapper;
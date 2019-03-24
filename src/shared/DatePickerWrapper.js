import React, { Component } from 'react';
import { View } from 'native-base';
import { observer, inject } from 'mobx-react';
import DatePicker from 'react-native-datepicker'

@observer
class DatePickerWrapper extends Component {

  state = {
    date: null
  }

  render() {
    return (
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <DatePicker
          style={{ width: '100%', height: 40 }}
          mode='date'
          date={this.state.date}
          showIcon={false}
          placeholder='Birth Date'
          format='YYYY-MM-DD'
          maxDate={new Date()}
          confirmBtnText='Ok'
          cancelBtnText='Cancel'
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
          onDateChange={(date) => { this.setState({ date: date }) }}
        />
      </View>
    );
  }

}

export default DatePickerWrapper;
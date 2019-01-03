import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Button, Text, View, Form
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';


import moment from 'moment';

import FarmField from './FarmField';
import EditButton from './EditButton';

@inject('UserStore')
@observer
class Farm extends Component {
   
  state = {
    isEditable: false
  }

  saveInfo = () => {
    const { farm } = this.props;
    farm.updateInfo();
    this.toggleisEditable();
  }

  deleteFarm = () => {
    const { UserStore } = this.props;
    if(UserStore.farms.length > 1) {

    }
    else {
      alert('At Least 1 Farm Information Required!');
    }
  }

  cancelEdit = () => {
    const { farm } = this.props;
    farm.cancelEdit();
    this.toggleisEditable();
  }

  toggleisEditable = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable
    }));
  }

  render() {

    
    const {
      container, openSansBold, flatButton
    } = styles;
    
    const { isEditable } = this.state;

    const { farm } = this.props;

    const {
      name, accreditation_no, accreditation_date, accreditation_expiry
    } = farm.editableData;

    return (
      <React.Fragment>
        <View>
          <View style={container}>
            <Text style={[openSansBold, { fontSize: 20 }]}>{name}</Text>
            <Text style={[openSansBold, { fontSize: 16 }]}>Accreditation Number: {accreditation_no}</Text>
            <Text style={[openSansBold, { fontSize: 16 }]}>
              Date Evaluated: {moment(accreditation_date).format('MMMM YYYY')}
            </Text>
            <Text style={[openSansBold, { fontSize: 16 }]}>
              Expiry Date: {moment(accreditation_expiry).format('MMMM YYYY')}
            </Text>
            <Button
              block
              onPress={this.deleteFarm}
              style={[flatButton, { backgroundColor: '#EF5350', marginTop: 10 }]}
            >
              <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>Delete Farm</Text>
            </Button>
          </View>
          <View style={[{marginTop: 15}]}>
            <Form>
              <FarmField
                farm={farm}
                label='Address Line 1* : Street, Road, Subdivision'
                field={'addressLine1'}
                isEditable={isEditable}
                keyboardType='default'
                isPicker={false}
              />
              <FarmField
                farm={farm}
                label='Address Line 2* : Barangay, Town, City'
                field={'addressLine2'}
                isEditable={isEditable}
                keyboardType='default'
                isPicker={false}
              />
              <FarmField
                farm={farm}
                label='Province'
                field={'province'}
                isEditable={isEditable}
                keyboardType='default'
                isPicker={true}
              />
              <FarmField
                farm={farm}
                label='Postal / Zip Code'
                field={'zipCode'}
                isEditable={isEditable}
                keyboardType='numeric'
                isPicker={false}
              />
              <FarmField
                farm={farm}
                label='Farm Type'
                field={'farmType'}
                isEditable={isEditable}
                keyboardType='default'
                isPicker={false}
              />
              <FarmField
                farm={farm}
                label='Farm Landline'
                field={'landline'}
                isEditable={isEditable}
                keyboardType='default'
                isPicker={false}
              />
              <FarmField
                farm={farm}
                label='Farm Mobile'
                field={'mobile'}
                isEditable={isEditable}
                keyboardType='default'
                isPicker={false}
              />
            </Form>
          </View>
          <View style={{ marginTop: 20 }}>
            <EditButton
              isEditable={isEditable}
              toggleisEditable={this.toggleisEditable}
              saveInfo={this.saveInfo}
              cancelEdit={this.cancelEdit}
            />
          </View>
        </View>
      </React.Fragment>
    );
  }

}

const styles = StyleSheet.create({
  container: {
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

export default Farm;
import React, { Component } from 'react';
import {
  StyleSheet, FlatList
} from 'react-native';
import {
  Container, Content, Header, Body, Title, StyleProvider, Segment, Button, Text,
  Form, Item, Input, Label, View
} from 'native-base';

class Farms extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    }
  }

  handleChangeText = (field, value) => {
    this.setState({
      [field]: value
    });
  }

  toggleisEditable = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable
    }));
  }

  saveInfo = () => {
    this.setState({
      isEditable: false
    });
  }


  render() {

    const {
      container, openSansBold, openSansSemiBold, flatButton
    } = styles;
    return (
      <React.Fragment>
        <View>
          <Text>Hello</Text>
        </View>
      </React.Fragment>
    );
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

export default Farms;
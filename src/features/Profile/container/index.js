import React, { Component } from 'react';
import {
  StyleSheet, FlatList
} from 'react-native';

import {
  Container, Content, Header, Body, Title, StyleProvider, Segment, Button, Text,
  Left, Right, Icon, View
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import StyleProviderWrapper from '../../../shared/StyleProviderWrapper';

import OfficeInfo from '../components/OfficeInfo';
import Farms from '../components/Farms';
import ChangePassword from '../components/ChangePassword';
import Segments from '../components/Segments';
@inject('UserStore', 'AuthStore')
@observer
class Profile extends Component {

  state = {
    selectedIndex: 2
  }

  setIndex = index => {
    this.setState({
      selectedIndex: index
    });
  }

  logout = async () => {
    await this.props.AuthStore.logout();
  }

  render() {

    const {
      container, openSansBold, flatButton, contentStyle
    } = styles;

    return (
      <StyleProviderWrapper>
        <Container>
          <Header noShadow androidStatusBarColor='#00695C' hasSegment>
            <Left style={{ flex: 1 }}></Left>
            <Body style={container}>
              <Title style={[openSansBold, { color: '#ffffff' }]}>
                Profile
              </Title>
            </Body>
            <Right style={[contentStyle]}>
              <Button
                block
                onPress={this.logout}
                style={[flatButton, { backgroundColor: 'transparent' }]}
              >
                <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>Logout</Text>
              </Button>
            </Right>
          </Header>
          <Segments 
            values={['Office Info', 'Farms', 'Change Password']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.setIndex}
          />
          <Content padder>
            {this.state.selectedIndex === 0 && <OfficeInfo />}
            {this.state.selectedIndex === 1 && <Farms />}
            {this.state.selectedIndex === 2 && <ChangePassword />}
          </Content>
        </Container>
      </StyleProviderWrapper>
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

export default Profile;
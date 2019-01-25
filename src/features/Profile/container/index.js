import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
  Container, Content, Header, Body, Title, Button, Text, Left, Right
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import OutlinedButton from '../../../shared/OutlinedButton';
import HeaderWrapper from '../../../shared/HeaderWrapper';
import StyleProviderWrapper from '../../../shared/StyleProviderWrapper';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

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
      container, openSansBold, contentStyle
    } = styles;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={this.props.AuthStore.loadingLogout} textContent='Logging out...' />
        <StyleProviderWrapper>
          <Container>
            <HeaderWrapper hasSegment>
              <Left style={{ flex: 1 }}></Left>
              <Body style={container}>
                <Title style={[openSansBold, { color: '#ffffff' }]}>
                  Profile
              </Title>
              </Body>
              <Right style={[contentStyle]}>
                <OutlinedButton onPress={this.logout} style={{ height: 36 }}
                >
                  <Text uppercase={false} style={[openSansBold, { fontSize: 14, lineHeight: 36 }]}>
                    Logout
                </Text>
                </OutlinedButton>
              </Right>
            </HeaderWrapper>
            <Segments
              values={['Office Info', 'Farms', 'Change Password']}
              selectedIndex={this.state.selectedIndex}
              onTabPress={this.setIndex}
            />
            <Content padder>
              {this.state.selectedIndex === 0 && <OfficeInfo />}
              {this.state.selectedIndex === 1 && null}
              {this.state.selectedIndex === 2 && <ChangePassword />}
            </Content>
          </Container>
        </StyleProviderWrapper>
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
  }
});

export default Profile;
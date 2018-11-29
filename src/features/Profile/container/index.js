import React, { Component } from 'react';
import {
  StyleSheet, FlatList
} from 'react-native';

import {
  Container, Content, Header, Body, Title, StyleProvider, Segment, Button, Text
} from 'native-base';

// import {
//   observer, inject
// } from 'mobx-react';

// import {
//   toJS
// } from 'mobx';

import commonColor from '../../../../native-base-theme/variables/commonColor';
import getTheme from '../../../../native-base-theme/components';

import UserInfo from '../components/UserInfo';
import ChangePassword from '../components/ChangePassword';
class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currSeg: 3
    }
  }

  changeSeg = (segNum) => {
    this.setState({
      currSeg: segNum
    });
  }

  render() {

    const {
      container, openSansBold, openSansSemiBold
    } = styles;

    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header noShadow androidStatusBarColor='#ffffff' hasSegment>
            <Body style={[container]}>
              <Title style={[openSansBold, { color: '#000000' }]}>
                Profile
              </Title>
            </Body>
          </Header>
          <Segment>
            <Button first onPress={() => this.changeSeg(1)} active={this.state.currSeg === 1}>
              <Text style={[openSansSemiBold]}>User Info</Text>
            </Button>
            <Button onPress={() => this.changeSeg(2)} active={this.state.currSeg === 2}>
              <Text style={[openSansSemiBold]}>Farms</Text>
            </Button>
            <Button last onPress={() => this.changeSeg(3)} active={this.state.currSeg === 3}>
              <Text style={[openSansSemiBold]}>Change Password</Text>
            </Button>
          </Segment>
          <Content padder>
            {this.state.currSeg === 1 && <UserInfo />}
            {this.state.currSeg === 3 && <ChangePassword />}
          </Content>
        </Container>
      </StyleProvider>
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
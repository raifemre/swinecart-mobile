import React, { Component } from 'react';
import {
  StyleSheet, FlatList
} from 'react-native';

import {
  Container, Content, Header, Body, Title, StyleProvider, Segment, Button, Text,
  Left, Right, Icon
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import commonColor from '../../../../native-base-theme/variables/commonColor';
import getTheme from '../../../../native-base-theme/components';

import OfficeInfo from '../components/OfficeInfo';
import Farms from '../components/Farms';
import ChangePassword from '../components/ChangePassword';
@inject('UserStore', 'AuthStore')
@observer
class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currSeg: 1
    }
  }

  componentDidMount() {
  }

  changeSeg = (segNum) => {
    this.setState({
      currSeg: segNum
    });
  }

  logout = async () => {
    const { AuthStore } = this.props;
    await AuthStore.logout();
  }

  render() {

    const {
      container, openSansBold, openSansSemiBold, flatButton, contentStyle
    } = styles;

    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header noShadow androidStatusBarColor='#ffffff' hasSegment>
            <Left style={{ flex: 1 }}></Left>
            <Body style={container}>
              <Title style={[openSansBold, { color: '#000000' }]}>
                Profile
              </Title>
            </Body>
            <Right style={[contentStyle]}>
              <Button
                block
                onPress={this.logout}
                style={[flatButton, { backgroundColor: '#EF5350' }]}
              >
                <Text uppercase={true} style={[openSansBold, { fontSize: 16 }]}>Logout</Text>
              </Button>
            </Right>
          </Header>
          <Segment>
            <Button first onPress={() => this.changeSeg(1)} active={this.state.currSeg === 1}>
              <Text style={[openSansSemiBold]}>Office Info</Text>
            </Button>
            <Button onPress={() => this.changeSeg(2)} active={this.state.currSeg === 2}>
              <Text style={[openSansSemiBold]}>Farms</Text>
            </Button>
            <Button last onPress={() => this.changeSeg(3)} active={this.state.currSeg === 3}>
              <Text style={[openSansSemiBold]}>Change Password</Text>
            </Button>
          </Segment>
          <Content padder>
            {this.state.currSeg === 1 && <OfficeInfo />}
            {this.state.currSeg === 2 && <Farms />}
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
  },
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
});

export default Profile;
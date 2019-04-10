import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
  Container, View, Left, Right
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import OfficeInfo from '../components/OfficeInfo';
import Farms from '../components/Farms';
import ChangePassword from '../components/ChangePassword';
import Segments from '../../../shared/Segments';
import IconButton from '../../../shared/IconButton';
@inject('FarmStore', 'AuthStore')
@observer
class Profile extends Component {

  componentDidMount() {
    this.props.FarmStore.getFarms();
  }

  state = {
    selectedIndex: 1
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
      contentStyle
    } = styles;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={this.props.AuthStore.loadingLogout} textContent='Logging out...' />
        <Container>
          <HeaderWrapper hasSegment>
            <Left style={[contentStyle]}>
            </Left>
            <BodyWrapper title='Profile' />
            <Right style={[contentStyle]}>
              <IconButton
                marginLeft={0}
                marginRight={0}
                size={30}
                name='logout-variant'
                color='#ffffff'
                type='MaterialCommunityIcons'
                onPress={this.logout}
              />
            </Right>
          </HeaderWrapper>
          <Segments
            values={['Office Info', 'Farms', 'Change Password']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.setIndex}
          />
          <View style={{ flex: 1 }}>
            {this.state.selectedIndex === 0 && <OfficeInfo />}
            {this.state.selectedIndex === 1 && <Farms />}
            {this.state.selectedIndex === 2 && <ChangePassword />}
          </View>
        </Container>
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
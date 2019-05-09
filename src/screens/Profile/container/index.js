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

import IconButton from '../../../shared/IconButton';

import BreederProfile from '../components/BreederProfile';
import CustomerProfile from '../components/CustomerProfile';

@inject('FarmStore', 'AuthStore', 'UserStore')
@observer
class Profile extends Component {

  componentDidMount() {
    this.props.FarmStore.getFarms();
  }

  state = {
    selectedIndex: 0
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

    const { AuthStore, UserStore } = this.props;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={AuthStore.loadingLogout} textContent='Logging out...' />
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
          {/* {UserStore.userRole === 'Breeder' 
            && <BreederProfile selectedIndex={this.state.selectedIndex} setIndex={this.setIndex} /> }
          {UserStore.userRole === 'Customer'
            && <CustomerProfile selectedIndex={this.state.selectedIndex} setIndex={this.setIndex} />} */}
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
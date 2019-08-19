import React, { Fragment, memo } from 'react';

import {
  HeaderBar, ContainerView, BackButton
} from '../../shared/components';

import {
  Section
} from './components';
import { NavigationService, AuthService } from '../../services';

function Container(props) {

  const onPressLogout = () => {
    AuthService.logout();
    NavigationService.navigate('Public');
  }

  return (
    <Fragment>
      <HeaderBar title='Settings'
        leftControl={<BackButton />}
      />
      <ContainerView backgroundColor='#ffffff'>
        {/* <Section text='Edit Profile' textColor='#000000'/> */}
        {/* <Section text='Change Password' textColor='#000000'/> */}
        <Section text='Logout' textColor='#E21B43' onPress={onPressLogout} />
      </ContainerView>
    </Fragment>
  )

}

export default memo(Container);
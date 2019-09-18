import React, { Fragment, memo } from 'react';
import { useDispatch } from 'react-redux';

import {
  HeaderBar, ContainerView, BackButton
} from 'shared/components';

import {
  Section
} from './components';

function Container(props) {

  const dispatch = useDispatch();

  const onPressLogout = async () => {
    dispatch.auth.logout();
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
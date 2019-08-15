import React, { Fragment, memo } from 'react';

import {
  HeaderBar, ContainerView, BackButton
} from '../../../shared/components';

import {
  Section
} from './components';

function Container(props) {

  const onPressLogout = () => {
    alert('Logout');
  }

  return (
    <Fragment>
      <HeaderBar title='Settings'
        leftControl={<BackButton />}
      />
      <ContainerView backgroundColor='#ffffff'>
        <Section text='Edit Profile' textColor='#000000'/>
        <Section text='Change Password' textColor='#000000'/>
        <Section text='Logout' textColor='#E21B43' onPress={onPressLogout} />
      </ContainerView>
    </Fragment>
  )

}

export default memo(Container);
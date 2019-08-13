import React, { Fragment, memo, useEffect, useState } from 'react';

import {
  HeaderBar, BackButton, LoadingView
} from '../../shared/components';

import {
  Chat
} from './components'

function Container({ navigation }) {

  const [user, setUser] = useState({ userName: 'Cecil Carter' });

  // useEffect(() => {
  //   const user = navigation.getParam('user');
  //   setUser(user);
  // }, []);

  return (
    <Fragment>
      { 
        user && 
          <Fragment>
            <HeaderBar
              title={user.userName}
              leftControl={<BackButton />}
            />
            <Chat user={user} /> 
          </Fragment>
      }
      {
        !user && <LoadingView />
      }
    </Fragment>
  )

}

export default memo(Container);
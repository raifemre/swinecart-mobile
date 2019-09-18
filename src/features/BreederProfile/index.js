import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';

import { HeaderBar, SettingsButton } from 'shared/components';

import { OfficeInfo } from './components';

function Container(props) {

  const getProfile = useStoreActions(
    actions => actions.breederProfile.getData
  );

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Fragment>
      <HeaderBar
        title='Profile'
        hasShadow
        rightControls={<SettingsButton />}
      />
      <OfficeInfo />
    </Fragment>
  )

}

export default memo(Container);
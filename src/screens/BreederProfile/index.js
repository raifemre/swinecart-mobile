import React, { Fragment, memo } from 'react';

import {
  HeaderBar, ContainerView, SettingsButton
} from '../../shared/components';

import {
  OfficeInfo
} from './components';

function Container(props) {

  return (
    <Fragment>
      <HeaderBar title='Profile'
        rightControls={<SettingsButton />}
      />
      <OfficeInfo />
    </Fragment>
  )

}

export default memo(Container);
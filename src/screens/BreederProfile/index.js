import React, { Fragment, memo } from 'react';

import { HeaderBar, SettingsButton } from 'shared/components';

import { OfficeInfo } from './components';

function Container(props) {
  return (
    <Fragment>
      <HeaderBar
        title='Profile'
        hasShadow
        rightControls={<SettingsButton />}
      />
      {/* <OfficeInfo /> */}
    </Fragment>
  )

}

export default memo(Container);
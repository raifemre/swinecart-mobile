import React, { Fragment, memo } from 'react';

import { HeaderBar } from 'shared/components';

import { InboxTabView } from './components';

function Container(props) {

  return (
    <Fragment>
      <HeaderBar title='Inbox' />
      {/* <InboxTabView /> */}
    </Fragment>
  )

}

export default memo(Container, () => true);
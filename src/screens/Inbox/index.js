import React, { Fragment, PureComponent } from 'react';

import { HeaderBar } from '../../shared/components';

import {
  InboxTabView
} from './components';

class Container extends PureComponent {

  state = {
    selectedIndex: 1
  }

  onSelect = selectedIndex => {
    this.setState({
      selectedIndex
    });
  }

  render() {

    return (
      <Fragment>
        <HeaderBar title='Inbox' />
        <InboxTabView />
      </Fragment>
    );
  }

}

export default Container;
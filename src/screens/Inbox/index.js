import React, { Fragment, PureComponent } from 'react';

import { HeaderBar } from '../../shared/components';

// import { 
//   ConversationList, NotificationList
// } from './components';

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
      </Fragment>
    );
  }

}

export default Container;
import React, { Fragment, PureComponent } from 'react';

import { Tab } from 'react-native-ui-kitten';
import { TabView, HeaderBar } from '../../shared/components';

import { 
  ConversationList, NotificationList
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
        <TabView 
          selectedIndex={this.state.selectedIndex}
          onSelect={this.onSelect}
        >
          <Tab title='Messages' style={{ width: 30 }}>
            <ConversationList />
          </Tab>
          <Tab title='Notifications'>
            <NotificationList />
          </Tab>
        </TabView>
      </Fragment>
    );
  }

}

export default Container;
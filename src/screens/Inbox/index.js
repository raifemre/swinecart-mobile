import React, { Fragment, PureComponent } from 'react';

import {
  TopNavigation, Tab
} from 'react-native-ui-kitten';

import { 
  TabView
} from '../../shared/components';

class Container extends PureComponent {

  state = {
    selectedIndex: 0
  }

  onSelect = selectedIndex => {
    this.setState({
      selectedIndex
    });
  }

  render() {

    return (
      <Fragment>
        <TopNavigation
          title='Inbox'
          alignment='center'
        />
        <TabView 
          selectedIndex={this.state.selectedIndex}
          onSelect={this.onSelect}
        >
          <Tab title='Messages'>

          </Tab>
          <Tab title='Notifications'>

          </Tab>
        </TabView>
      </Fragment>
    );
  }

}

export default Container;
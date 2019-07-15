import React, { Fragment, PureComponent } from 'react';

import { Tab } from 'react-native-ui-kitten';
import {  TabView, HeaderBar } from '../../shared/components';

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
        <HeaderBar title='Inbox' />
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
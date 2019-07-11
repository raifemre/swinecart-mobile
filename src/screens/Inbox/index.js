import React, { Fragment, PureComponent } from 'react';

import {
  TopNavigation, TabView, Tab, Text
} from 'react-native-ui-kitten';

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
            <Text>Tab 1</Text>
          </Tab>
          <Tab title='Notifications'>
            <Text>Tab 1</Text>
          </Tab>
        </TabView>
      </Fragment>
    );
  }

}

export default Container;
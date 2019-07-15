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
          title='Orders'
          alignment='center'
        />
        <TabView
          selectedIndex={this.state.selectedIndex}
          onSelect={this.onSelect}
        >
          <Tab title='Requested'>

          </Tab>
          <Tab title='Reserved'>

          </Tab>
          <Tab title='On Delivery'>

          </Tab>
          <Tab title='Sold'>

          </Tab>
        </TabView>
      </Fragment>
    );
  }

}

export default Container;
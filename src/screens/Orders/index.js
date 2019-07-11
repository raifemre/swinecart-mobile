import React, { Fragment, PureComponent } from 'react';

import {
  TopNavigation, TabView, Tab, Text
} from 'react-native-ui-kitten';

import { 
  colors
} from '../../constants/theme';

import {
  Block
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
            <Text>Tab 1</Text>
          </Tab>
          <Tab title='Reserved'>
            <Text>Tab 1</Text>
          </Tab>
          <Tab title='On Delivery'>
            <Text>Tab 1</Text>
          </Tab>
          <Tab title='Sold'>
            <Text>Tab 1</Text>
          </Tab>
        </TabView>
      </Fragment>
    );
  }

}

export default Container;
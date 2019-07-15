import React, { Fragment, PureComponent } from 'react';

import {
  TopNavigation, TabView, Tab, Text
} from 'react-native-ui-kitten';

import {
  Block
} from '../../shared/components';

import { colors } from '../../constants/theme';

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
            <Block center middle flex={1} style={{ backgroundColor: colors.gray2 }}>
            </Block>
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
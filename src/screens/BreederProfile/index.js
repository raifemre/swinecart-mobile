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
          title='Profile'
          alignment='center'
        />
        <TabView
          selectedIndex={this.state.selectedIndex}
          onSelect={this.onSelect}
        >
          <Tab title='Office Information'>

          </Tab>
          <Tab title='Farms'>

          </Tab>
        </TabView>
      </Fragment>
    );
  }

}


export default Container;
import React, { Fragment, PureComponent } from 'react';

import {
  Tab
} from 'react-native-ui-kitten';

import {
  TabView, HeaderBar, ContainerView
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
        <HeaderBar title='Profile' />
        <ContainerView>
          
        </ContainerView>
      </Fragment>
    );
  }

}


export default Container;
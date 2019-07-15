import React, { Fragment, PureComponent } from 'react';

import {
  TopNavigation
} from 'react-native-ui-kitten';

class MyProducts extends PureComponent {

  componentDidMount() {
  }

  render() {
    return (
      <Fragment>
        <TopNavigation
          title='My Products'
          alignment='center'
        />
      </Fragment>
    );
  }

}

export default MyProducts;
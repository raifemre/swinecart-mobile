import React, { Fragment, PureComponent } from 'react';

import {
  TopNavigation
} from 'react-native-ui-kitten';


import { 
  Block
} from '../../shared/components';

import { colors } from '../../constants/theme';

class Container extends PureComponent {

  componentDidMount() {
  }

  render() {
    return (
      <Fragment>
        <TopNavigation
          title='My Products'
          alignment='center'
        />
        <Block flex={1} style={{ backgroundColor: colors.gray2 }}>
        </Block>
      </Fragment>
    );
  }

}

export default Container;
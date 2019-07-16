import React, { Fragment, PureComponent } from 'react';

import {
  TopNavigation
} from 'react-native-ui-kitten';

import {
  Block
} from '../../shared/components';

import { colors } from '../../constants/theme';

import { 
  Request
} from './components';

class Container extends PureComponent {

  componentDidMount() {
  }

  render() {
    return (
      <Fragment>
        <TopNavigation
          title='Requests'
          alignment='center'
        />
        <Block paddingTop flex={1} style={{ backgroundColor: colors.gray2 }}>
          <Request />
        </Block>
      </Fragment>
    );
  }

}

export default Container;
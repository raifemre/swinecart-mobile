import React, { PureComponent } from 'react';
import {
  TopNavigation
} from 'react-native-ui-kitten';

class HeaderBar extends PureComponent {


  render() {

    const { title } = this.props;


    return (
      <TopNavigation
        title={title}
        alignment='center'
      />
    )

  }

}

export default HeaderBar;
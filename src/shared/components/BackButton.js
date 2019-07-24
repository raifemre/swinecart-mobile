import React, { PureComponent } from 'react';
import {
  TopNavigation, TopNavigationAction
} from 'react-native-ui-kitten';

import SettingsIcon from '../../assets/icons/settings.png';

import Icon from './Icon';

class BackButton extends PureComponent {

  renderRightControls = () => {
    return (
      <TopNavigationAction
        icon={() => <Icon source={SettingsIcon} style={{ width: 26, height: 26 }} />}
      />
    )
  }


  render() {

    const { title } = this.props;


    return (
      <TopNavigation
        title={title}
        alignment='center'
        rightControls={this.renderRightControls()}
      />
    )

  }

}

export default BackButton;
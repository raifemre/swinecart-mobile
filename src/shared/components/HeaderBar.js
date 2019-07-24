import React, { PureComponent } from 'react';
import {
  TopNavigation, TopNavigationAction
} from 'react-native-ui-kitten';

import SettingsIcon from '../../assets/icons/settings.png';

import Icon from './Icon';

import { textStyles } from '../../constants/theme';

class HeaderBar extends PureComponent {

  onPressLeft = () => {
    alert('Pressed Left');
  }

  onPressRight = () => {
    alert('Pressed Right');
  }

  renderLeftControl = () => {
    return (
      <TopNavigationAction
        icon={() => <Icon source={SettingsIcon} style={{ width: 26, height: 26 }} />}
        onPress={this.onPressLeft}
      />
    );
  }

  renderRightControls = () => {
    return (
      <TopNavigationAction 
        icon={() => <Icon source={SettingsIcon} style={{ width: 26, height: 26 }} />}
        onPress={this.onPressRight}
      />
    )
  }

  render() {

    const { title } = this.props;

    return (
      <TopNavigation
        title={title}
        titleStyle={textStyles.headline}
        alignment='center'
        leftControl={this.renderLeftControl()}
        rightControls={this.renderRightControls()}
      />
    )

  }

}

export default HeaderBar;
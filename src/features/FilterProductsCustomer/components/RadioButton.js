import React, { Component } from 'react';
import { View, CheckBox } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';

class RadioButton extends Component {

  state = {
    checked: false
  }

  onPress = () => {
    this.setState({
      checked: !this.state.checked
    }, () => {
      this.props.handleOnPress(this.props.label);
    });
  }

  render() {

    const { label } = this.props;
    const { checked } = this.state;

    return (
      <View style={{ marginHorizontal: 8 }}>
        <CheckBox checked={checked} color='#000000' onPress={this.onPress}/>
        <TextWrapper text={label} />
      </View>
    );
  }

}

export default RadioButton;

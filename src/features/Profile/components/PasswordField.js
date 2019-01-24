import React, { Component } from 'react';

import { Item, Input } from 'native-base';

class PasswordField extends Component {


  state =  {
    showPassword: false
  }

  onChangeText = value => {
    const { form, field } = this.props;
    form.setValue(field, value);
  }

  render() {
    const { form, placeholder, field } = this.props;
    return (
      <Item>
        <Input
          placeholder={placeholder}
          value={form[field]}
          onChangeText={this.onChangeText}
          secureTextEntry={this.state.showPassword}
          style={{ fontFamily: 'OpenSans-SemiBold' }}
        />
      </Item>
    );
  }
}

export default PasswordField;
import React, { Component } from 'react';

import { Item, Input, Text } from 'native-base';
import { observer } from 'mobx-react';
@observer
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
      <React.Fragment>
        <Item>
          <Input
            placeholder={placeholder}
            value={form.form[field]}
            onChangeText={this.onChangeText}
            secureTextEntry={this.state.showPassword}
            style={{ fontFamily: 'OpenSans-SemiBold' }}
          />
        </Item>
      </React.Fragment>
    );
  }
}

export default PasswordField;
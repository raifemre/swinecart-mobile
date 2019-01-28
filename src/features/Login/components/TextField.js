import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Item, Input } from 'native-base';

@observer
class InputField extends Component {

  onChangeText = value => {
    const { form, field } = this.props;
    form.setValue(field, value);
  }

  render() {
    const { form, placeholder, field  } = this.props;

    return (
      <Item>
        <Input
          value={form.form[field]}
          placeholder={placeholder}
          onChangeText={this.onChangeText}
        />
      </Item>
    );
  }
}

export default InputField;
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Item, Input, Label } from 'native-base';

@observer
class InputField extends Component {

  onChangeText = value => {
    const { form, field } = this.props;
    form.setValue(field, value);
  }

  render() {
    const { form, placeholder, field  } = this.props;

    return (
      <Item stackedLabel>
        <Label>{placeholder}</Label>
        <Input
          placeholder={placeholder}
          value={form.form[field]}
          onChangeText={this.onChangeText}
        />
      </Item>
    );
  }
}

export default InputField;
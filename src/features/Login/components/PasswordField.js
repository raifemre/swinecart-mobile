import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import { Item, Input, Label, View, Button, Icon } from 'native-base';


// import IconWrapper from './IconWrapper';

import IconWrapper from '../../../shared/IconWrapper';

@observer
class PasswordField extends Component {

  state = {
    showPassword: false
  }

  onChangeText = value => {
    const { form, field } = this.props;
    form.setValue(field, value);
  }

  togglePassword = () => {
    this.setState(({ showPassword }) => ({ showPassword: !showPassword }));
  }

  render() {

    const { item, label, input, container } = styles;
    const { form, placeholder, field } = this.props;
    const { showPassword } = this.state;

    return (
      <View style={container}>
        <Item floatingLabel rounded style={item}>
          <Label style={label}>
            {placeholder}
          </Label>
          <Input
            value={form.form[field]}
            style={input}
            onChangeText={this.onChangeText}
            secureTextEntry={!showPassword}
          />
          <Icon
            name={!showPassword ? 'eye' : 'eye-off'}
            type='MaterialCommunityIcons'
            style={{ marginBottom: 18 }}
          />
        </Item>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    height: 44, paddingHorizontal: 10, lineHeight: 44
  },
  label: {
    top: -8, left: 15, fontFamily: 'OpenSans-SemiBold'
  },
  input: {
    height: 46, marginBottom: 12, fontSize: 16, fontFamily: 'OpenSans-Bold'
  },
  container: {
    marginVertical: 10
  }
});

export default PasswordField;
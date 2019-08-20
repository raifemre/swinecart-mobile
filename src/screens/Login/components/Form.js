import { Field, reduxForm } from 'redux-form';
import React, { Fragment, memo } from 'react';

import { Block, Input } from '../../../shared/components';
import LoginButton from './LoginButton';

import { 
  email, maxLength8
} from '../../../utils/validators';

function FormComponent({ handleSubmit }) {

  const onPressLogin = values => {
    console.dir(values);
  };

  const renderInput = (field) => {
    const { input: { onChange, value }, meta: { error }, ...inputProps } = field;
    console.log(error);
    return (
      <Input 
        value={value}
        error={error}
        onChangeText={onChange} 
        {...inputProps}
      />
    );
  };

  const emailProps = { label: 'EMAIL' };
  const passwordProps = {
    label: 'PASSWORD',
    secureTextEntry: true
  };

  return (
    <Fragment>
      <Block flex='disabled' middle marginBottom>
        <Field
          component={renderInput}
          name='email'
          validate={email}
          props={emailProps}
        />
        <Field
          component={renderInput}
          name='password'
          validate={maxLength8}
          props={passwordProps}
        />
      </Block>
      <LoginButton 
        onPress={handleSubmit(onPressLogin)}
      />
    </Fragment>
  );
}

const Form = reduxForm({
  form: 'login',
  initialValues: {
    email: 'jordi11@luettgen.net',
    password: 'secret12'
  }
})(memo(FormComponent, () => true));

export default Form;
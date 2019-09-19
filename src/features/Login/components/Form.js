import React, { Fragment, memo, useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Formik } from 'formik';

import { Block, Input } from 'shared/components';
import LoginButton from './LoginButton';

import { LoginSchema } from 'utils/validationSchemas';

function Form() {

  const isLoggingIn = useStoreState(state => state.auth.isLoggingIn);
  const loginUser = useStoreActions(actions => actions.auth.login);

  const [initialValues, setInitialValues] = useState({
    email: 'helena.gleichner@volkman.biz',
    password: 'secret12',
    // email: '',
    // password: ''
  });

  const onPressLogin = ({ email, password }) => {
    loginUser({ email, password });
  };

  return (
    <Fragment>
      <Formik
        onSubmit={onPressLogin}
        initialValues={initialValues}
        validationSchema={LoginSchema}
      >
        {({
          values, handleSubmit, setFieldValue, errors, touched
        }) => (
            <Fragment>
              <Block flex={1} middle>
                <Input
                  name='email'
                  label='Email'
                  errors={errors}
                  touched={touched}
                  values={values}
                  onChange={setFieldValue}
                />
                <Input
                  name='password'
                  label='Password'
                  values={values}
                  errors={errors}
                  touched={touched}
                  onChange={setFieldValue}
                  secureTextEntry={true}
                />
                <LoginButton
                  isLoading={isLoggingIn}
                  onPress={handleSubmit}
                />
              </Block>
            </Fragment>
          )}
      </Formik>
    </Fragment>
  );
}

export default memo(Form);
import React, { Fragment, memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import { Block, Input } from '../../../shared/components';
import LoginButton from './LoginButton';
import { LoginSchema } from '../../../utils/validationSchemas';

import { loginUser } from '../../../redux/actions/auth';

function Form() {

  const dispatch  = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoggingIn);

  const [initialValues, setInitialValues] = useState({
    email: 'danny33@murray.org',
    password: 'secret12',
    // email: '',
    // password: ''
  });


  const onPressLogin = ({ email, password }) => {
    dispatch(loginUser(email, password));
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
                  isLoading={isLoading}
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
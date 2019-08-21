import React, { Fragment, memo, useState, useEffect } from 'react';
import { Formik } from 'formik';

import { Block, Input } from '../../../shared/components';
import LoginButton from './LoginButton';

import { LoginSchema } from '../../../utils/validationSchemas';

function Form() {

  const [initialValues, setInitialValues] = useState({
    email: 'jordi11@luettgen.net',
    password: 'secret12',
    // email: '',
    // password: ''
  });

  const onPressLogin = values => {
    console.dir(values);
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
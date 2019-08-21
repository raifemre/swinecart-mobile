import React, { Fragment, memo, useState, useEffect } from 'react';
import { Formik } from 'formik';

import { Block, Input } from '../../../shared/components';
import LoginButton from './LoginButton';

function Form() {

  const [initialValues, setInitialValues] = useState({
    email: 'jordi11@luettgen.net',
    password: 'secret12'
  });


  const onPressLogin = values => {
    console.dir(values);
  };
  return (
    <Fragment>
      <Formik
        onSubmit={onPressLogin}
        initialValues={initialValues}
      >
        {({
          values, handleSubmit, setFieldValue
        }) => (
            <Fragment>
              <Block flex={1} middle>
                <Input
                  name='email'
                  label='Email'
                  error='Invalid Email'
                  values={values}
                  onChange={setFieldValue}
                />
                <Input
                  name='password'
                  label='Password'
                  values={values}
                  onChange={setFieldValue}
                  secureTextEntry={true}
                />
                {/* <LoginButton
                  onPress={handleSubmit}
                /> */}
              </Block>
            </Fragment>
          )}
      </Formik>
    </Fragment>
  );
}

export default memo(Form);
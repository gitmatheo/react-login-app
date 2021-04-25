import React, { ReactElement } from 'react';
import { Alert } from 'reactstrap';
import { useLogin } from '../hooks/useLogin';
import { Formik, Form } from 'formik';
import { CustomField } from './CustomField';
import * as Yup from 'yup';
import { LoginDetails } from '../models/LoginDetails';
import loginImg from '../assets/login.svg';

const LoginForm = (): ReactElement => {
  const { errorMessage, submit } = useLogin();

  //Example validation provided by Yup library.
  //I commented 'password' out just to check if 400 - "Wrong data" is picked up from mockApi and shown as 'errorMessage'.
  //(That was required in task 4)

  const validate = Yup.object({
    username: Yup.string()
      .max(10, 'Username should have 10 characters or less')
      .required('This field is required'),
    // password: Yup.string()
    //   .min(6, 'Password should be 6 characters or more')
    //   .required('This field is required'),
  });

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              validationSchema={validate}
              validateOnMount
              onSubmit={(values: LoginDetails) => submit(values)}
            >
              {(formik) => (
                <div>
                  <h1 className="my-4 font-weight-bold .display-4">Log In</h1>
                  <Form>
                    <CustomField label="Username" name="username" type="text" />
                    <CustomField
                      label="Password"
                      name="password"
                      type="password"
                    />
                    {errorMessage && (
                      <Alert color="danger"> {errorMessage}</Alert>
                    )}
                    <button
                      className="btn btn-success mt-3"
                      type="submit"
                      disabled={!formik.isValid}
                    >
                      Log in
                    </button>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </div>
        <div className="col-md-6 my-auto d-none d-sm-block ">
          <img className="img-fluid w-100" src={loginImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

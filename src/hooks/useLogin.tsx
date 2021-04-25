import Cookies from 'js-cookie';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../api/apiService';
import { LoginDetails } from '../models/LoginDetails';

interface useLogin {
  errorMessage: string;
  submit: (loginDetails: LoginDetails) => void;
}
export const useLogin = (): useLogin => {
  const [errorMessage, setErrorMessage] = useState('');

  let history = useHistory();

  const submit = (loginDetails: LoginDetails): void => {
    const { username, password } = loginDetails;
    login(username, password)
      .then((response) => {
        if (response.status === 200) {
          Cookies.set('user_token', response?.data.token);
          history.push('/dashboard');
        }
      })
      .catch((error) => {
        setErrorMessage(error?.response?.data);
      });
  };

  return {
    errorMessage,
    submit,
  };
};

import Cookies from 'js-cookie';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../api/apiService';

interface useLoginProps {
  username: string;
  password: string;
  errorMessage: string;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
}
export const useLogin = (): useLoginProps => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  let history = useHistory();

  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
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
    username,
    password,
    errorMessage,
    submit,
    setUsername,
    setPassword,
  };
};

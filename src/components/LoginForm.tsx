import React, { ReactElement, useState } from 'react';
import {
  Alert,
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { login } from '../api/apiService';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginForm = (): ReactElement => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  let history = useHistory();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username, password)
      .then((response) => {
        if (response.status === 200) {
          Cookies.set('user_token', response?.data.token);
          history.push('/dashboard');
        } else {
          alert('Failed!');
        }
      })
      .catch((error) => {
        setErrorMessage(error?.response?.data);
      });
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      {errorMessage && <Alert color="danger"> {errorMessage}</Alert>}

      <Form onSubmit={submit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <Button type="submit">Sign in</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;

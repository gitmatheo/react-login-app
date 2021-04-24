import React, { ReactElement } from 'react';
import {
  Alert,
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { useLogin } from '../hooks/useLogin';

const LoginForm = (): ReactElement => {
  const {
    username,
    password,
    errorMessage,
    submit,
    setUsername,
    setPassword,
  } = useLogin();
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

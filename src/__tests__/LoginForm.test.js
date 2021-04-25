import React from 'react';
import LoginForm from '../components/LoginForm';
import { render, fireEvent, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('LoginForm Component', () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  it('loads and displays username and password inputs', () => {
    const usernameInput = screen.getByRole('textbox', { name: /username/i });
    const passwordInput = screen.getByLabelText(/password/i);

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('username input should have label', () => {
    const usernameInput = screen.getByLabelText(/username/i);

    expect(usernameInput.getAttribute('name')).toBe('username');
  });

  it('password input should have label', () => {
    const passwordInput = screen.getByLabelText(/password/i);

    expect(passwordInput.getAttribute('name')).toBe('password');
  });

  it('shouldnt display form validation error messages on load', async () => {
    const requiredErrorMessage = screen.queryByText(/This field is required/i);
    const usernameErrorMessage = screen.queryByText(
      /Username should have 10 characters or less/i
    );

    expect(requiredErrorMessage).not.toBeInTheDocument();
    expect(usernameErrorMessage).not.toBeInTheDocument();
  });

  it('should display error message when username input value is longer than 10 characters', async () => {
    const usernameInput = screen.getByLabelText(/username/i);

    userEvent.type(usernameInput, 'usernamelongerthan10characters');
    fireEvent.blur(usernameInput);
    // //todo - find out why it has to be here or how to get rid of it
    await act(async () => {});
    const usernameErrorMessage = screen.queryByText(
      /Username should have 10 characters or less/i
    );

    expect(usernameErrorMessage).toBeInTheDocument();
  });

  it('should display "required" error message when username input is empty', async () => {
    const usernameInput = screen.getByLabelText(/username/i);

    await act(async () => {
      userEvent.type(usernameInput, '');
      fireEvent.blur(usernameInput);
    });

    const usernameErrorMessage = screen.queryByText(/This field is required/i);

    expect(usernameErrorMessage).toBeInTheDocument();
  });

  it('button should be disabled if', async () => {
    const usernameInput = screen.getByLabelText(/username/i);

    await act(async () => {
      userEvent.type(usernameInput, '');
      fireEvent.blur(usernameInput);
    });

    const usernameErrorMessage = screen.queryByText(/This field is required/i);

    expect(usernameErrorMessage).toBeInTheDocument();
  });

  // describe('with valid inputs', () => {
  //   it('calls the onSubmit function', async () => {
  //     const submitMock = jest.fn();
  //     render(<LoginForm onSubmit={submitMock} />);
  //     const usernameInput = screen.getByRole('textbox', { name: /username/i });
  //     const passwordInput = screen.getByLabelText(/password/i);
  //     const loginButton = screen.getByRole('button', { name: /Log in/i });

  //     await act(async () => {
  //       userEvent.type(usernameInput, 'admin');
  //       userEvent.type(passwordInput, 'password');
  //       userEvent.click(loginButton);
  //     });

  //     await waitFor(() => expect(submitMock).toHaveBeenCalled());
  //   });
  // });
});

import Cookies from 'js-cookie';
import React, { ReactElement, useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getUser } from '../api/apiService';
import { UserContext } from '../contexts/UserContext';

const isLoggedIn = () => Cookies.get('user_token');
interface PrivateRouteProps {
  component: any;
  path: string;
}

export const PrivateRoute = ({
  component,
  path,
  ...rest
}: PrivateRouteProps): ReactElement => {
  const Component = component;
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    getUser().then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

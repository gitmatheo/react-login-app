import React, { Component } from 'react';
import LoginForm from './LoginForm';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import { useCookies } from 'react-cookie';
import Dashboard from './Dashboard';
import PageNotFound from './PageNotFound';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user_token']);

  const isLoggedIn = () => cookies.user_token;

  const PrivateRoute = ({
    component,
    path,
    ...rest
  }: {
    component: any;
    path: string;
  }) => {
    const Component = component;
    return (
      <Route
        {...rest}
        render={(props) =>
          cookies.user_token ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  };
  return (
    <div className="App">
      {/* Add React Router library, move Login form to /login route (and make it default route) */}
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          <Route path="/login">
            <LoginForm />
          </Route>

          <Route path="/page-not-found">
            <PageNotFound />
          </Route>

          <Route path="/">
            <Redirect to="/page-not-found" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

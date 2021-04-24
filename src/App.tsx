import React from 'react';
import LoginForm from './LoginForm';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Add React Router library, move Login form to /login route (and make it default route) */}
      <Router>
        <Switch>
          {/* One way */}
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          {/* Second way */}

          {/* <Redirect from="/" to="/login" /> */}

          <Route path="/login">
            <LoginForm />
          </Route>

          <Route path="/dashboard">dashboard</Route>

          {/*extra task - 404 not found */}
          <Route path="/page-not-found">
            {/* <PageNotFound/> doesn't exist yet */}
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

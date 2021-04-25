import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PageNotFound from './components/PageNotFound';
import LoginForm from './components/LoginForm';
import { PrivateRoute } from './components/PrivateRoute';
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
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
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;

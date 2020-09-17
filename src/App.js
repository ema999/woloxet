import React from 'react';
import './App.scss';
import './styles/styles.scss';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './components/screens/Home/Home';
import Login from './components/screens/Login/Login';
import Logout from './components/screens/Logout/Logout';
import PrivateRoute from './routing/PrivateRoute';


function App(props) {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login" render={({ location }) =>
            !props.token && !localStorage.getItem('token') ? (
              <Login />
            ) : (
              <Redirect
                to={{
                  pathname: "/home",
                  state: { from: location }
                }}
              />
            )
          }>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/tecnologies">
            <Home />
          </PrivateRoute>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  token: state.auth.token
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

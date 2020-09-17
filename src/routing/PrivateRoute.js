import React  from 'react';
import { connect } from 'react-redux';
import {
    Route,
    Redirect
  } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  const props = {...rest};
  return (
    <Route
      {...rest}
      render={({ location }) =>
        props.token || localStorage.getItem('token') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = state => ({
    token: state.auth.token
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
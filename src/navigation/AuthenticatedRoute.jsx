import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { getUser } from '../auth/redux/selectors';

const AuthenticatedRoute = ({ authenticated, children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => (authenticated ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: '/auth/login',
          state: { from: location },
        }}
      />
    ))}
  />
);

const mapStateToProps = (state) => ({
  authenticated: !!getUser(state),
});

export default connect(mapStateToProps, null)(AuthenticatedRoute);

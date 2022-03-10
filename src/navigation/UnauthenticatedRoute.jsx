import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import { getUser } from '../auth/redux/selectors';

const UnAuthenticatedRoute = ({ unauthenticated, children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => (unauthenticated ? (
      children
    ) : (
      <Redirect
        to={location.state || '/dashboard'}
      />
    ))}
  />
);

const mapStateToProps = (state) => ({
  unauthenticated: !getUser(state),
});

export default connect(mapStateToProps, null)(UnAuthenticatedRoute);

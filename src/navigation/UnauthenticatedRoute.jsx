import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { getUser } from '../auth/redux/selectors';

const UnAuthenticatedRoute = ({ unauthenticated, children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => (unauthenticated ? (
      children
    ) : (
      <Redirect
        to={location.state || '/'}
      />
    ))}
  />
);

const mapStateToProps = (state) => ({
  unauthenticated: !getUser(state),
});

export default connect(mapStateToProps, null)(UnAuthenticatedRoute);

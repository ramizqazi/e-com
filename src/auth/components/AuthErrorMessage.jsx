import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Alert, AlertIcon } from '@chakra-ui/react';

import { getError } from '../redux/selectors';
import { setError as setErrorAction } from '../redux/actions';

/* =============================================================================
<AuthErrorMessage />
============================================================================= */
const AuthErrorMessage = ({ error, setError, ...props }) => {
  const location = useLocation();

  // Clear error on mount and unmount
  useEffect(() => {
    setError('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  if (error?.message) {
    return (
      <Alert status="error" {...props}>
        <AlertIcon alignSelf="start" />
        {error.message}
      </Alert>
    );
  }

  return null;
};

const mapStateToProps = (state) => ({
  error: getError(state),
});

const mapDispatchTopProps = {
  setError: setErrorAction,
};

/* Export
  ============================================================================= */
export default connect(mapStateToProps, mapDispatchTopProps)(AuthErrorMessage);

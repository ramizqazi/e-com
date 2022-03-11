import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Box, Center, Heading } from '@chakra-ui/react';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import AuthErrorMessage from '../components/AuthErrorMessage';

/* =============================================================================
<AuthScreen />
============================================================================= */
const AuthScreen = () => (
  <Box flex={1}>
    <Center p={5} flexDir="column">
      <Heading mb={5} borderBottom="4px solid red" color="black" fontSize="4xl" fontWeight="extrabold">
        E-Com
        <span style={{ color: '#D2203A' }}>.</span>
      </Heading>
      <Switch>
        <Route path="/auth/login" exact>
          <LoginScreen />
        </Route>
        <Route path="/auth/register" exact>
          <RegisterScreen />
        </Route>
      </Switch>
      <AuthErrorMessage mt={6} />
    </Center>
  </Box>
);

/* Export
============================================================================= */
export default AuthScreen;

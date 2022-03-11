import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

import Layout from '../common/Layout';
import HomeScreen from '../home/screens/HomeScreen';
import AuthScreen from '../auth/screens/AuthScreen';
import ProductScreen from '../product/screens/ProductScreen';
import UnauthenticatedRoute from './UnauthenticatedRoute';

/* =============================================================================
<AppNavigation />
============================================================================= */
const AppNavigation = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
        <UnauthenticatedRoute path="/auth">
          <AuthScreen />
        </UnauthenticatedRoute>
        <Route path="/product/:id" exact>
          <ProductScreen />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

/* Export
============================================================================= */
export default AppNavigation;

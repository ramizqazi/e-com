import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

import Layout from '../common/Layout';
import HomeScreen from '../home/screens/HomeScreen';
import AuthScreen from '../auth/screens/AuthScreen';
import ProductScreen from '../products/screens/ProductScreen';
import WishListScreen from '../wishList/screens/WishListScreen';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';

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
        <AuthenticatedRoute path="/wish">
          <WishListScreen />
        </AuthenticatedRoute>
        <Route path="/product/:id">
          <ProductScreen />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

/* Export
============================================================================= */
export default AppNavigation;

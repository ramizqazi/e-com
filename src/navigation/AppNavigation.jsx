import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from '../common/Layout';
import HomeScreen from '../home/screens/HomeScreen';
import ProductScreen from '../product/screens/ProductScreen';

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

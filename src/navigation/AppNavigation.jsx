import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '../common/Layout';

/* =============================================================================
<AppNavigation />
============================================================================= */
function AppNavigation() {
  return (
    <Router>
      <Layout />
      {/* <Switch>
      </Switch> */}
    </Router>
  );
}

/* Export
============================================================================= */
export default (AppNavigation);

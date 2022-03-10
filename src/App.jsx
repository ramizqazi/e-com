import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';

import AppNavigation from './navigation/AppNavigation';
import theme from './config/theme/index';
import configureStore from './redux/configureStore';

const { store, persistor } = configureStore();

/* =============================================================================
<App />
============================================================================= */
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ChakraProvider theme={theme}>
        <AppNavigation />
      </ChakraProvider>
    </PersistGate>
  </Provider>
);

/* Export
============================================================================= */
export default App;

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import AppNavigation from './navigation/AppNavigation';
import theme from './config/theme/index';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppNavigation />
    </ChakraProvider>
  );
}

export default App;

import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import '@fontsource/cabin';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './config/theme/index';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();

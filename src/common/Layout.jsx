import React from 'react';
import { Flex } from '@chakra-ui/react';

import Header from './Header/index';

/* =============================================================================
<Layout />
============================================================================= */
function Layout({ children }) {
  return (
    <Flex flex={1} flexDir="column" height="100%" pos="relative">
      <Header />
      <Flex flex={1} flexFlow="column nowrap">
        {children}
      </Flex>
    </Flex>
  );
}

/* Export
============================================================================= */
export default Layout;

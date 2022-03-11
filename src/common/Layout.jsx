import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import Header from './Header/index';

/* =============================================================================
<Layout />
============================================================================= */
const Layout = ({ children }) => {
  const location = useLocation();
  const paths = location.pathname;

  return (
    <Flex flex={1} flexDir="column" height="100%" pos="relative">
      {!paths.includes('/auth') && <Header />}
      <Flex flex={1} bgColor="white" flexFlow="column nowrap">
        {children}
      </Flex>
    </Flex>
  );
};

/* Export
============================================================================= */
export default Layout;

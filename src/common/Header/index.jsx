import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Link,
  useMediaQuery,
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import HeaderButton from './HeaderButtons';

const Header = () => {
  const [isLargerThan766] = useMediaQuery('(min-width: 766px)');

  return (
    <Box px={5} py={2} bgColor="black" borderBottom="3px solid #d2203a">
      <HStack justify="space-between" margin="0 auto" maxW="1200px">
        <Link as={NavLink} to="/">
          <Heading color="white" fontWeight="extrabold" flexShrink={0}>
            E-Com
            <span style={{ color: '#D2203A' }}>.</span>
          </Heading>
        </Link>
        {isLargerThan766 && <HeaderSearch /> }
        <HeaderButton />
      </HStack>
    </Box>
  );
};

export default Header;

import React from 'react';
import { Text, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import HeaderButtonBadge from './HeaderButtonBadge';

const HeaderButton = ({ icon, title, count }) => (
  <Link to="/wish" as={NavLink} position="relative" display="flex" flexDir="column" alignItems="center">
    {icon}
    <Text align="center">{title}</Text>
    <HeaderButtonBadge count={count} />
  </Link>
);

export default HeaderButton;

import React from 'react';
import { Text, Link, useMediaQuery } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import HeaderButtonBadge from './HeaderButtonBadge';

const HeaderButton = ({ icon, title, count }) => {
  const [isSmallerThan766] = useMediaQuery('(max-width: 766px)');
  return (
    <Link to="/wish" as={NavLink} position="relative" display="flex" flexDir="column" alignItems="center">
      {icon}
      <Text align="center" color={isSmallerThan766 ? 'black' : 'white'}>{title}</Text>
      <HeaderButtonBadge count={count} />
    </Link>
  );
};

export default HeaderButton;

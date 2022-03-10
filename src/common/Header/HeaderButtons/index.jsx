import React from 'react';
import {
  Box,
  Menu,
  HStack,
  Button,
  MenuList,
  MenuItem,
  MenuButton,
  useMediaQuery,
  InputGroup,
  Input,
  InputRightElement,
} from '@chakra-ui/react';
import { Menu as MenuIcon, Heart, ShoppingCart } from 'react-feather';

import HeaderButton from './HeaderButton';
import HeaderSearch from '../HeaderSearch';

const HeaderButtons = () => {
  const [isSmallerThan766] = useMediaQuery('(max-width: 766px)');

  return (
    <Box>
      <HStack display={['none', 'none', 'flex']} className="Icons-div" spacing={7}>
        <HeaderButton title="Wish List" icon={<Heart />} count={2} />
        <HeaderButton title="Your Cart" icon={<ShoppingCart />} count={2} />
      </HStack>
      {isSmallerThan766 && (
        <Menu isLazy>
          <MenuButton as={Button} variant="unstyled" rightIcon={<MenuIcon />} />
          <MenuList p={3} mt={3}>
            <HeaderSearch />
            <MenuItem justifyContent="center" alignItems="center">
              <HeaderButton title="Your Cart" icon={<ShoppingCart />} count={2} />
            </MenuItem>
            <MenuItem justifyContent="center" alignItems="center">
              <HeaderButton title="Your Cart" icon={<ShoppingCart />} count={2} />
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Box>
  );
};

export default HeaderButtons;

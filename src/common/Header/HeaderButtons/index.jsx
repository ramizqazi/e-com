import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Box,
  Menu,
  HStack,
  Button,
  MenuList,
  MenuItem,
  MenuButton,
  useMediaQuery,
} from '@chakra-ui/react';
import {
  Heart,
  LogOut,
  ShoppingCart,
  Menu as MenuIcon,
} from 'react-feather';

import HeaderButton from './HeaderButton';
import HeaderSearch from '../HeaderSearch';

import { getUser } from '../../../auth/redux/selectors';
import { logout as logoutAction } from '../../../auth/redux/actions';

const HeaderButtons = ({ authenticated, logout }) => {
  const history = useHistory();
  const [isSmallerThan766] = useMediaQuery('(max-width: 766px)');

  const _handleLogout = async () => {
    await logout();
    history.push('/auth/login');
  };

  if (!authenticated) {
    return (
      <Box>
        <HStack display={['none', 'none', 'flex']} spacing={7}>
          <Button color="white" as={NavLink} to="/auth/login" variant="link">Login</Button>
          <Button color="white" as={NavLink} to="/auth/register" variant="link">Register</Button>
        </HStack>
        {isSmallerThan766 && (
          <Menu isLazy>
            <MenuButton as={Button} variant="unstyled" rightIcon={<MenuIcon color="white" />} />
            <MenuList p={3} mt={3}>
              <HeaderSearch />
              <MenuItem>
                <Button color="black" as={NavLink} to="/auth/login" variant="link">Login</Button>
              </MenuItem>
              <MenuItem>
                <Button color="black" as={NavLink} to="/auth/register" variant="link">Register</Button>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>
    );
  }

  return (
    <Box>
      <HStack display={['none', 'none', 'flex']} className="Icons-div" spacing={7}>
        <HeaderButton title="Wish List" icon={<Heart color="white" />} count={2} />
        <HeaderButton title="Your Cart" icon={<ShoppingCart color="white" />} count={2} />
        <Button rightIcon={<LogOut />} onClick={_handleLogout}>Logout </Button>
      </HStack>
      {isSmallerThan766 && (
        <Menu isLazy>
          <MenuButton as={Button} variant="unstyled" rightIcon={<MenuIcon color="white" />} />
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

const mapStateToProps = (state) => ({
  authenticated: Boolean(getUser(state)),
});

const mapDispatchToProps = {
  logout: logoutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderButtons);

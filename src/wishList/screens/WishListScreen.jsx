import React from 'react';
import { connect } from 'react-redux';
import { Box, List, Text } from '@chakra-ui/react';

import WishListItem from '../components/WishListItem';

import { getUser } from '../../auth/redux/selectors';

const WishListScreen = ({ user }) => {
  const wishList = user?.wishList;
  return (
    <Box flex={1} py={5} maxW="1200px" margin="0 auto">
      <List mx={5}>
        {wishList?.map(renderWishListItem)}
      </List>
    </Box>
  );
};

const renderWishListItem = (item) => <WishListItem id={item} />;

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export default connect(mapStateToProps)(WishListScreen);

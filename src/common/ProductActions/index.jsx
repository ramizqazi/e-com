import React, { useState } from 'react';
import {
  Button, HStack, Text, useDisclosure,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { Heart, ShoppingCart } from 'react-feather';

import ProductActionsLoginModal from './ProductActionsLoginModal';

import { getUser } from '../../auth/redux/selectors';
import {
  addWishList as addWishListAction,
  removeWishList as removeWishListAction,
} from '../../wishList/redux/actions';

const ProductActions = ({
  id,
  user,
  showDetail,
  addWishList,
  removeWishList,
}) => {
  const wishList = user?.wishList;
  const existInWishList = wishList?.find((w) => w === id);
  const [loading, setLoading] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const _handleWishListClick = async () => {
    setLoading(true);
    if (!user) {
      onOpen();
    } else if (existInWishList) {
      await removeWishList(id);
    } else {
      await addWishList(id);
    }
    setLoading(false);
  };

  return (
    <HStack pt={[5, 5, 0]}>
      <Button
        color="black"
        isLoading={loading}
        onClick={_handleWishListClick}
      >
        <Heart color="red" fill={existInWishList ? 'red' : 'none'} />
        {showDetail && <Text ml={2}>Add to Wish list</Text>}
      </Button>
      <Button color="black">
        <ShoppingCart color="red" />
        {showDetail && <Text ml={2}>Add to Cart</Text> }
      </Button>
      <ProductActionsLoginModal isVisible={isOpen} onClose={onClose} />
    </HStack>
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

const mapDispatchToProps = {
  addWishList: addWishListAction,
  removeWishList: removeWishListAction,
};

// eslint-disable-next-line max-len
const propsAreEqual = (prevProps, nextProps) => prevProps.user === nextProps.user?.wishList?.toString();

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(ProductActions, propsAreEqual));

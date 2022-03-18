import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { Heart, ShoppingCart } from 'react-feather';

import { getUser } from '../../../auth/redux/selectors';
import {
  addWishList as addWishListAction,
  removeWishList as removeWishListAction,
} from '../../../wishList/redux/actions';
import { getLoading } from '../../../wishList/redux/selectors';

const ProductDetailsButtons = ({
  id,
  user,
  loading,
  addWishList,
  removeWishList,
}) => {
  const wishList = user?.wishList;
  const existInWishList = wishList?.find((w) => w === id);

  const _handleWishListClick = () => {
    if (existInWishList) {
      removeWishList(id);
    } else {
      addWishList(id);
    }
  };

  return (
    <HStack pt={[5, 5, 0]}>
      <Button
        color="black"
        leftIcon={<Heart color="red" fill={existInWishList ? 'red' : 'none'} />}
        isLoading={loading}
        onClick={_handleWishListClick}
      >
        Add to Wish list
      </Button>
      <Button
        color="black"
        leftIcon={<ShoppingCart color="red" />}
      >
        Add to Cart
      </Button>
    </HStack>
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state),
  loading: getLoading(state),
});

const mapDispatchToProps = {
  addWishList: addWishListAction,
  removeWishList: removeWishListAction,
};

// eslint-disable-next-line max-len
const propsAreEqual = (prevProps, nextProps) => prevProps.user === nextProps.user?.wishList?.toString()
&& prevProps.loading === nextProps.loading;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(ProductDetailsButtons, propsAreEqual));

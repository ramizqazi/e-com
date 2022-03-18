import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Text,
  Image,
  Button,
  HStack,
  ListItem,
} from '@chakra-ui/react';

import { ShoppingCart, Trash2 } from 'react-feather';
import { getProduct } from '../../entities/redux/selectors';
import { removeWishList as removeWishListAction } from '../redux/actions';

const WishListItem = ({ id, product, removeWishList }) => {
  const store = product?.store?.name;
  const name = product?.name;
  const about = product?.about;
  const price = product?.price;
  const photo = product?.photos[0];
  const [loading, setLoading] = useState(false);

  const _handleRemoveWishListClick = async () => {
    setLoading(true);
    await removeWishList(id);
    setLoading(false);
  };

  return (
    <ListItem
      mb={5}
      pr={4}
      as={HStack}
      border="1px"
      borderRadius={7}
      borderColor="gray.300"
      justify="space-between"
      flexDir={['column', 'column', 'row']}
    >
      <HStack flexDir={['column', 'column', 'row']}>
        <Box flex={1}>
          <Image h="170px" src={photo} />
        </Box>
        <Box flex={3}>
          <Text fontSize="xl">{store}</Text>
          <Text fontSize="2xl">{name}</Text>
          <Text fontSize="sm" noOfLines={3}>{about}</Text>
        </Box>
      </HStack>
      <HStack flexDir={['row', 'row', 'column']}>
        <Text>{`Rs ${price}`}</Text>
        <HStack>
          <Button p={0} color="black">
            <ShoppingCart color="red" />
            <Text ml={2}>Add To Cart</Text>
          </Button>
          <Button color="black" isLoading={loading} onClick={_handleRemoveWishListClick}>
            <Trash2 size="20px" color="gray" />
          </Button>
        </HStack>
      </HStack>
    </ListItem>
  );
};

const mapStateToProps = (state, { id }) => ({
  product: getProduct(state, { id }),
});

const mapDispatchToProps = {
  removeWishList: removeWishListAction,
};

// eslint-disable-next-line max-len
const propsAreEqual = (prevProps, nextProps) => prevProps?.product?.name === nextProps?.product?.name
&& prevProps?.product?.price === nextProps?.product?.price
&& prevProps?.product?.store?.name === nextProps?.product?.store?.name;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(WishListItem, propsAreEqual));

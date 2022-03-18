import React from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Text,
  Image,
  Button,
  HStack,
  ListItem,
} from '@chakra-ui/react';

import { ShoppingCart } from 'react-feather';
import { getProduct } from '../../entities/redux/selectors';

const WishListItem = ({ product }) => {
  const store = product?.store?.name;
  const name = product?.name;
  const about = product?.about;
  const price = product?.price;
  const photo = product?.photos[0];

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
        <Button p={0} color="black">
          <ShoppingCart color="red" />
          <Text ml={2}>Add To Cart</Text>
        </Button>
      </HStack>
    </ListItem>
  );
};

const mapStateToProps = (state, { id }) => ({
  product: getProduct(state, { id }),
});

// eslint-disable-next-line max-len
const propsAreEqual = (prevProps, nextProps) => prevProps?.product?.name === nextProps?.product?.name
&& prevProps?.product?.price === nextProps?.product?.price
&& prevProps?.product?.store?.name === nextProps?.product?.store?.name
&& prevProps.product?.photo[0] === nextProps.product?.photo[0];

export default connect(mapStateToProps)(WishListItem);

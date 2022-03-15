import React from 'react';
import {
  Box,
  Button,
  HStack,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { Heart, ShoppingCart } from 'react-feather';

import { getProduct } from '../../entities/redux/selectors';

const ProductDetails = ({ product }) => {
  const store = product?.store?.name;
  const name = product?.name;
  const about = product?.about;
  const price = product?.price;
  const photo = product?.photos[0];

  return (
    <Flex flexDir={['column', 'column', 'row']} align={['center', 'center', 'flex-start']} mx={5}>
      <Image mr={[0, 0, 5]} mb={5} borderRadius={5} w={['70%', '70%', '40%']} src={photo} />
      <Box>
        <Text color="black" fontWeight="semibold" fontSize="2xl">{store}</Text>
        <Text color="black" fontWeight="bold" fontSize="4xl">{name}</Text>
        <Text color="black" fontWeight="bold">{about}</Text>
        <Text fontSize="2xl" fontWeight="bold" my={5} color="brand">{`$${price}`}</Text>
        <HStack justify="flex-end">
          <Button color="black" leftIcon={<Heart color="red" />}>Add to Wish list</Button>
          <Button color="black" leftIcon={<ShoppingCart color="red" />}>Add to Cart</Button>
        </HStack>
      </Box>
    </Flex>
  );
};

const mapStateToProps = (state, { id }) => ({
  product: getProduct(state, { id }),
});

export default connect(mapStateToProps)(ProductDetails);

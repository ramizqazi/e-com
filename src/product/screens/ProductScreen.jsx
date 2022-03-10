import React from 'react';
import {
  Box, Button, HStack, Image, Text,
} from '@chakra-ui/react';
import { Heart, ShoppingCart } from 'react-feather';

const ProductScreen = () => (
  <Box flex={1} py={5} maxW="1200px" margin="0 auto">
    <HStack align="flex-start">
      <Image w="40%" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
      <Box>
        <Text color="black" fontWeight="semibold" fontSize="2xl">Levis</Text>
        <Text color="black" fontWeight="bold" fontSize="4xl">Mens Causal T-Shirt</Text>
        <Text color="black" fontWeight="bold">
          Slim-fitting style, contrast raglan long sleeve,
          three-button henley placket, light weight &
          soft fabric for breathable and comfortable wearing.
          And Solid stitched shirts with round neck made
          for durability and a great fit for casual fashion wear
          and diehard baseball fans. The Henley style
          round neckline includes a three-button placket.
        </Text>
        <Text fontSize="2xl" fontWeight="bold" my={5} color="brand">$109.95</Text>
        <HStack justify="flex-end">
          <Button leftIcon={<Heart color="red" />}>Add to Wish list</Button>
          <Button leftIcon={<ShoppingCart color="red" />}>Add to Cart</Button>
        </HStack>
      </Box>
    </HStack>
  </Box>
);

export default ProductScreen;

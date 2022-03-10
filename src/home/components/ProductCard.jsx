import React from 'react';
import {
  Box,
  Button,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import { Heart, ShoppingCart } from 'react-feather';
import { Link, NavLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const id = product?.id;
  const photo = product?.photo;
  const name = product?.name;
  const price = product?.price;
  const store = product?.store;

  return (
    <Box p={5} border="1px" borderColor="gray.300" borderRadius={5}>
      <Link as={NavLink} to={`/product/${id}`}>
        <Image mb={2} width="100%" height="auto" src={photo} alt={name} />
      </Link>
      <Box textAlign="center">
        <Link as={NavLink} to={`/product/${id}`}>
          <Text color="black" fontWeight="bold">{store}</Text>
          <Text color="black" fontWeight="bold">{name}</Text>
          <Text color="brand" fontWeight="bold">
            $
            {price}
          </Text>
        </Link>
        <HStack justify="center" mt={5}>
          <Button variant="link" colorScheme="red">
            <Heart />
          </Button>
          <Button variant="link" colorScheme="red">
            <ShoppingCart />
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;

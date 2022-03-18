import React from 'react';
import {
  Box,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import ProductActions from './ProductActions/index';

import { getProduct } from '../entities/redux/selectors';

const ProductCard = ({ id, product }) => {
  const photo = product?.photos[0];
  const name = product?.name;
  const price = product?.price;
  const store = product?.store?.name;

  return (
    <Box maxW="250px" p={5} border="1px" borderColor="gray.300" borderRadius={5}>
      <Link as={NavLink} to={`/product/${id}`}>
        <Image borderRadius={5} mb={2} width="100%" height="170px" src={photo} alt={name} />
      </Link>
      <Box textAlign="center">
        <Link as={NavLink} to={`/product/${id}`}>
          <Text color="black" fontWeight="bold">{store}</Text>
          <Text color="black" fontWeight="bold">{name}</Text>
          <Text color="brand" fontWeight="bold">{`Rs. ${price}`}</Text>
        </Link>
        <HStack justify="center" mt={5}>
          <ProductActions id={id} />
        </HStack>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state, { id }) => ({
  product: getProduct(state, { id }),
});

// eslint-disable-next-line max-len
const propsAreEqual = (prevProps, nextProps) => prevProps?.product?.name === nextProps?.product?.name
&& prevProps?.product?.price === nextProps?.product?.price
&& prevProps?.product?.store?.name === nextProps?.product?.store?.name
&& prevProps.product?.photo?.toString() === nextProps.product?.photo?.toString();

export default connect(mapStateToProps)(React.memo(ProductCard, propsAreEqual));

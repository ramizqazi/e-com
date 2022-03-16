import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { connect } from 'react-redux';

import { getProduct } from '../../../entities/redux/selectors';

const ProductDetailsInfo = ({ selectedVariant, product }) => {
  const store = product?.store?.name;
  const name = product?.name;
  const about = product?.about;
  const variants = product?.variants;
  const price = selectedVariant
    ? variants.find((v) => v?.name === selectedVariant)?.price : product?.price;

  return (
    <Box>
      <Text color="black" fontWeight="semibold" fontSize="2xl">{store}</Text>
      <Text color="black" fontWeight="bold" fontSize="4xl">{name}</Text>
      <Text color="black" fontWeight="bold">{about}</Text>
      <Text fontSize="2xl" fontWeight="bold" my={5} color="brand">{`$${price}`}</Text>
    </Box>
  );
};

const mapStateToProps = (state, { id }) => ({
  product: getProduct(state, { id }),
});

// eslint-disable-next-line max-len
const propsAreEqual = (prevProps, nextProps) => prevProps.selectedVariant === nextProps.selectedVariant
 && prevProps.product?.store.name === nextProps.product?.store.name
 && prevProps.product?.name === nextProps.product?.name
 && prevProps.product?.about === nextProps.product?.about
 && prevProps.product?.price === nextProps.product?.price
 && prevProps.product?.variants?.name === nextProps.product?.variants?.name
 && prevProps.product?.variants?.price === nextProps.product?.variants?.price;

export default connect(mapStateToProps)(React.memo(ProductDetailsInfo, propsAreEqual));

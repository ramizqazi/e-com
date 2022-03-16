import React from 'react';
import { HStack } from '@chakra-ui/react';
import { connect } from 'react-redux';

import ProductCard from '../../../common/ProductCard';
import { getProductsByCategory } from '../../../home/redux/selectors';
import { getProduct } from '../../../entities/redux/selectors';

const ProductsList = ({ products }) => (
  <HStack spacing={5} w="100%" overflow="auto">
    {products.map((product) => <ProductCard id={product} />)}
  </HStack>
);

const mapStateToProps = (state, { selectedProduct }) => {
  const product = getProduct(state, { id: selectedProduct });
  return {
    products: getProductsByCategory(state, { category: product?.category })
      ?.filter((p) => p !== selectedProduct),
  };
};

export default connect(mapStateToProps)(ProductsList);

import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductDetails from '../components/ProductDetails';

import { getProduct as getProductAction } from '../redux/actions';

const ProductScreen = ({ getProduct }) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Box flex={1} py={5} maxW="1200px" margin="0 auto">
      <ProductDetails id={id} />
    </Box>
  );
};

const mapDispatchToProps = {
  getProduct: getProductAction,
};

export default connect(null, mapDispatchToProps)(ProductScreen);

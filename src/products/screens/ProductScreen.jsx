import React, { useCallback, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductDetails from '../components/ProductDetails';
import ProductsList from '../components/ProductsList';

import { getProduct as getProductAction } from '../redux/actions';

const ProductScreen = ({ getProduct }) => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [_variant, setVariant] = useState('');

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const _handleQtyPlus = useCallback(() => setQty((prevState) => prevState + 1), []);
  const _handleQtyMinus = useCallback(() => {
    if (qty > 1) {
      setQty((prevState) => prevState - 1);
    }
  }, [qty]);
  const _handleVariantChange = useCallback((e) => setVariant(e.target.value), []);

  return (
    <Box flex={1} py={5} maxW="1200px" margin="0 auto">
      <ProductDetails
        id={id}
        qty={qty}
        selectedVariant={_variant}
        onPlus={_handleQtyPlus}
        onMinus={_handleQtyMinus}
        onVariantChange={_handleVariantChange}
      />
      <ProductsList selectedProduct={id} />
    </Box>
  );
};

const mapDispatchToProps = {
  getProduct: getProductAction,
};

export default connect(null, mapDispatchToProps)(ProductScreen);

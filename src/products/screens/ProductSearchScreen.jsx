import React, { useEffect, useState } from 'react';
import FlatList from 'flatlist-react';
import { connect } from 'react-redux';
import {
  Box,
  Text,
  Center,
  useMediaQuery,
} from '@chakra-ui/react';

import useQuery from '../../hooks/useQuery';
import ProductCard from '../../common/ProductCard';

import { getSearchProducts } from '../redux/selectors';

const ProductSearchScreen = ({ products }) => {
  const query = useQuery();
  const [isSmaller1280] = useMediaQuery('(max-width: 766px)');

  return (
    <Box flex={1} m={5}>
      {products[0] && (
        <Text fontSize="xl" maxW="1200px" margin="0 auto">
          Showing Results for:
          {' '}
          <span style={{ fontWeight: 'bold' }}>{query.get('q')}</span>
        </Text>
      )}
      <Box p={2} maxW="1200px" margin="0 auto">
        <FlatList
          list={products}
          displayGrid
          renderItem={renderItem}
          minColumnWidth={isSmaller1280 ? '170px' : '200px'}
          renderWhenEmpty={() => <Center fontSize="2xl">No Items In The Category Please Checkout Later!</Center>}
        />
      </Box>
    </Box>
  );
};

const renderItem = (item) => <ProductCard key={item} id={item} />;

const mapStateToProps = (state) => ({
  products: getSearchProducts(state),
});

export default connect(mapStateToProps)(ProductSearchScreen);

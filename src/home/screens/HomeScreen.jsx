import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, useMediaQuery } from '@chakra-ui/react';
import FlatList from 'flatlist-react';

import HomeHeader from '../components/HomeHeader';
import ProductCard from '../components/ProductCard';

import { getProducts as selectProducts, getNextCursor } from '../../products/redux/selectors';
import { getProducts as getProductsAction, refreshProducts as refreshProductsAction } from '../../products/redux/actions';

const HomeScreen = ({
  products,
  nextCursor,
  getProducts,
  refreshProducts,
}) => {
  const [isSmaller1280] = useMediaQuery('(max-width: 766px)');

  useEffect(() => {
    refreshProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _handleLoadMoreItems = () => {
    getProducts(nextCursor);
  };

  return (
    <Box flex={1}>
      <HomeHeader />
      <Box p={2} maxW="1200px" margin="0 auto">
        <FlatList
          list={products}
          displayGrid
          renderItem={renderItem}
          loadMoreItems={_handleLoadMoreItems}
          minColumnWidth={isSmaller1280 ? '170px' : '200px'}
          renderWhenEmpty={() => <div>List is empty!</div>}
        />
      </Box>
    </Box>
  );
};

const renderItem = (item) => <ProductCard key={item} id={item} />;

const mapStateToProps = (state) => ({
  products: selectProducts(state),
  nextCursor: getNextCursor(state),
});

const mapDispatchToProps = {
  getProducts: getProductsAction,
  refreshProducts: refreshProductsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

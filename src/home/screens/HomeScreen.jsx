import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Center, useMediaQuery } from '@chakra-ui/react';
import FlatList from 'flatlist-react';

import HomeHeader from '../components/HomeHeader';
import ProductCard from '../../common/ProductCard';
import HomeDeals from '../components/HomeDeals';

import { getProductsByCategory, getNextCursor, getCategory } from '../redux/selectors';
import { getProducts as getProductsAction, refreshProducts as refreshProductsAction } from '../redux/actions';

const HomeScreen = ({
  category,
  products,
  nextCursor,
  getProducts,
  refreshProducts,
}) => {
  const [isSmaller1280] = useMediaQuery('(max-width: 766px)');

  useEffect(() => {
    refreshProducts(category);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const _handleLoadMoreItems = () => {
    getProducts(category, nextCursor);
  };

  return (
    <Box flex={1}>
      <HomeHeader />
      <HomeDeals />
      <Box p={2} maxW="1200px" margin="0 auto">
        <FlatList
          list={products}
          displayGrid
          renderItem={renderItem}
          loadMoreItems={_handleLoadMoreItems}
          minColumnWidth={isSmaller1280 ? '170px' : '200px'}
          renderWhenEmpty={() => <Center fontSize="2xl">No Items In The Category Please Checkout Later!</Center>}
        />
      </Box>
    </Box>
  );
};

const renderItem = (item) => <ProductCard key={item} id={item} />;

const mapStateToProps = (state) => {
  const category = getCategory(state);
  return {
    category,
    products: getProductsByCategory(state, { category }),
    nextCursor: getNextCursor(state),
  };
};

const mapDispatchToProps = {
  getProducts: getProductsAction,
  refreshProducts: refreshProductsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

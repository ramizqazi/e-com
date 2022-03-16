import { createSelector } from 'reselect';

export const getLoading = (state) => state.Home.loading;

export const getError = (state) => state.Home.error;

export const getNextCursor = (state) => state.Home.nextCursor;

export const getCategory = (state) => state.Home.category;

export const getProducts = (state) => state.Home.productsByCategory;

export const _getCategory = (state, { category }) => category;

/**
  * Get product by category
  */
export const getProductsByCategory = createSelector(
  [getProducts, _getCategory],
  (productsByCategory, category) => (productsByCategory[category]
      && productsByCategory[category].data) || [],
);

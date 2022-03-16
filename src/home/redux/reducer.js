import * as constants from './constants';

export const INITIAL_STATE = {
  category: 'all',
  productsByCategory: [],
  nextCursor: null,
  error: null,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload, error } = action;

  switch (type) {
    // CATEGORY_SET
    case constants.CATEGORY_SET:
      return {
        ...state,
        category: payload,
      };

      // PRODUCTS_GET
    case constants.PRODUCTS_GET.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.PRODUCTS_GET.FAIL:
      return {
        ...state,
        error,
      };
    case constants.PRODUCTS_GET.SUCCESS:
      return {
        ...state,
        error: null,
        productsByCategory: {
          ...state.productsByCategory,
          [state.category]: {
            data: [...new Set([...state.productsByCategory[state.category].data,
              ...payload.result])],
            nextCursor: payload.nextCursor,
          },
        },
      };
    case constants.PRODUCTS_GET.COMPLETE:
      return {
        ...state,
        loading: false,
      };

      // PRODUCTS_REFRESH
    case constants.PRODUCTS_REFRESH.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.PRODUCTS_REFRESH.FAIL:
      return {
        ...state,
        error,
      };
    case constants.PRODUCTS_REFRESH.SUCCESS:
      return {
        ...state,
        error: null,
        productsByCategory: {
          ...state.productsByCategory,
          [state.category]: {
            data: payload.result,
            nextCursor: payload.nextCursor,
          },
        },
      };
    case constants.PRODUCTS_REFRESH.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

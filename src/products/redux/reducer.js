import * as constants from './constants';

export const INITIAL_STATE = {
  products: [],
  nextCursor: null,
  error: null,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload, error } = action;

  switch (type) {
    // PRODUCTS_GET
    case constants.PRODUCTS_GET.REQUEST:
      return {
        ...state,
        error: null,
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
        products: payload.result,
        nextCursor: payload.nextCursor,
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
        error: null,
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
        products: payload.result,
        nextCursor: payload.nextCursor,
      };
    case constants.PRODUCTS_REFRESH.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    // PRODUCT_GET
    case constants.PRODUCT_GET.REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case constants.PRODUCT_GET.FAIL:
      return {
        ...state,
        error,
      };
    case constants.PRODUCT_GET.SUCCESS:
      return {
        ...state,
      };
    case constants.PRODUCT_GET.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

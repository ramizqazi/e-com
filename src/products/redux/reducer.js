import * as constants from './constants';

export const INITIAL_STATE = {
  searchProducts: [],
  nextCursor: null,
  error: null,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload, error } = action;

  switch (type) {
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

    // PRODUCT_FIND
    case constants.PRODUCT_FIND.REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case constants.PRODUCT_FIND.FAIL:
      return {
        ...state,
        error,
      };
    case constants.PRODUCT_FIND.SUCCESS:
      return {
        ...state,
        searchProducts: payload,
      };
    case constants.PRODUCT_FIND.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

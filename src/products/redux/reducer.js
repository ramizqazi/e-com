import * as constants from './constants';

export const INITIAL_STATE = {
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

    default:
      return state;
  }
}

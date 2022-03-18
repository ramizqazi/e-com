import * as constants from './constants';

export const INITIAL_STATE = {
  nextCursor: null,
  error: null,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload, error } = action;

  switch (type) {
    // WISHLIST_ADD
    case constants.WISHLIST_ADD.REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case constants.WISHLIST_ADD.FAIL:
      return {
        ...state,
        error,
      };
    case constants.WISHLIST_ADD.SUCCESS:
      return {
        ...state,
      };
    case constants.WISHLIST_ADD.COMPLETE:
      return {
        ...state,
        loading: false,
      };
    // WISHLIST_REMOVE
    case constants.WISHLIST_REMOVE.REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case constants.WISHLIST_REMOVE.FAIL:
      return {
        ...state,
        error,
      };
    case constants.WISHLIST_REMOVE.SUCCESS:
      return {
        ...state,
      };
    case constants.WISHLIST_REMOVE.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

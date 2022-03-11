import * as constants from './constants';

export const INITIAL_STATE = {
  user: null,
  error: null,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload, error } = action;

  switch (type) {
    // USER_GET
    case constants.USER_GET.REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case constants.USER_GET.FAIL:
      return {
        ...state,
        error,
      };
    case constants.USER_GET.SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case constants.USER_GET.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    // LOGIN
    case constants.LOGIN.REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case constants.LOGIN.FAIL:
      return {
        ...state,
        error,
      };
    case constants.LOGIN.SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case constants.LOGIN.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    // LOGIN
    case constants.REGISTER.REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case constants.REGISTER.FAIL:
      return {
        ...state,
        error,
      };
    case constants.REGISTER.SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case constants.REGISTER.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    // LOGOUT
    case constants.LOGOUT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.LOGOUT.FAIL:
      return {
        ...state,
        error,
      };
    case constants.LOGOUT.SUCCESS:
      return INITIAL_STATE;
    case constants.LOGOUT.COMPLETE:
      return {
        ...state,
        loading: false,
      };

      // ERROR_SET
    case 'ERROR_SET':
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}

import { normalize } from 'normalizr';

import request from '../../util/request';
import * as constants from './constants';
import { addEntities } from '../../entities/redux/actions';
import { user as userSchema } from '../../entities/api/schema';

/**
 * USER_GET
 */
export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: constants.USER_GET.REQUEST });

    const payload = await request({
      url: '/users/me',
      method: 'GET',
    });
    const { entities, result } = normalize(payload, userSchema);

    dispatch(addEntities(entities));
    dispatch({
      type: constants.USER_GET.SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: constants.USER_GET.FAIL,
      error,
    });
    if (error === 'Unauthorized') {
      dispatch(logout());
    }
  } finally {
    dispatch({ type: constants.USER_GET.COMPLETE });
  }
};

/**
 * LOGIN
 */
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: constants.LOGIN.REQUEST });

    const payload = await request({
      url: '/auth/login',
      method: 'POST',
      data: {
        email,
        password,
      },
    });
    window.localStorage.setItem('@e-com/token', payload.token);
    const { entities, result } = normalize(payload.user, userSchema);

    dispatch(addEntities(entities));
    dispatch({
      type: constants.LOGIN.SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: constants.LOGIN.FAIL,
      error,
    });
  } finally {
    dispatch({ type: constants.LOGIN.COMPLETE });
  }
};

/**
 * REGISTER
 */
export const register = (data, cb) => async (dispatch) => {
  try {
    dispatch({ type: constants.REGISTER.REQUEST });

    const payload = await request({
      url: '/auth/register',
      method: 'POST',
      data,
    });
    window.localStorage.setItem('@e-com/token', payload.token);
    const { entities, result } = normalize(payload.user, userSchema);

    dispatch(addEntities(entities));
    dispatch({
      type: constants.REGISTER.SUCCESS,
      payload: result,
    });
    if (typeof cb === 'function') {
      cb(null, payload);
    }
  } catch (error) {
    dispatch({
      type: constants.REGISTER.FAIL,
      error,
    });
    if (typeof cb === 'function') {
      cb(error);
    }
  } finally {
    dispatch({ type: constants.REGISTER.COMPLETE });
  }
};

/**
 * LOGOUT
 */
export const logout = (cb) => async (dispatch) => {
  try {
    dispatch({ type: constants.LOGOUT.REQUEST });

    window.localStorage.removeItem('@e-com/token');

    dispatch({ type: constants.LOGOUT.SUCCESS });
  } catch (error) {
    dispatch({
      type: constants.LOGOUT.FAIL,
      error,
    });
  } finally {
    dispatch({ type: constants.LOGOUT.COMPLETE });
  }
};

/**
 * ERROR_SET
 */
export const setError = (payload) => ({
  type: 'ERROR_SET',
  payload,
});

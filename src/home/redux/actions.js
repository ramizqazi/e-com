import { normalize } from 'normalizr';

import request from '../../util/request';
import * as constants from './constants';
import { addEntities } from '../../entities/redux/actions';
import { product as productSchema } from '../../entities/api/schema';

/**
 * CATEGORY_SET
 */
export const setCategory = (payload) => ({
  type: constants.CATEGORY_SET,
  payload,
});

/**
 * PRODUCTS_GET
 */
export const getProducts = (category, nextCursor) => async (dispatch) => {
  try {
    dispatch({ type: constants.PRODUCTS_GET.REQUEST });

    const payload = await request({
      url: '/products',
      method: 'GET',
      params: {
        category,
        next_cursor: nextCursor,
      },
    });
    const { entities, result } = normalize(payload.data, [productSchema]);

    dispatch(addEntities(entities));
    dispatch({
      type: constants.PRODUCTS_GET.SUCCESS,
      payload: {
        result,
        nextCursor: payload.nextCursor,
      },
    });
  } catch (error) {
    dispatch({
      type: constants.PRODUCTS_GET.FAIL,
      error,
    });
  } finally {
    dispatch({ type: constants.PRODUCTS_GET.COMPLETE });
  }
};

/**
 * PRODUCTS_REFRESH
 */
export const refreshProducts = (category) => async (dispatch) => {
  try {
    dispatch({ type: constants.PRODUCTS_REFRESH.REQUEST });

    const payload = await request({
      url: '/products',
      method: 'GET',
      params: {
        category,
      },
    });
    const { entities, result } = normalize(payload.data, [productSchema]);

    dispatch(addEntities(entities));
    dispatch({
      type: constants.PRODUCTS_REFRESH.SUCCESS,
      payload: {
        result,
        nextCursor: payload.nextCursor,
      },
    });
  } catch (error) {
    dispatch({
      type: constants.PRODUCTS_REFRESH.FAIL,
      error,
    });
  } finally {
    dispatch({ type: constants.PRODUCTS_REFRESH.COMPLETE });
  }
};

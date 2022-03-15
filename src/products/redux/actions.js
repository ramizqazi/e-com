import { normalize } from 'normalizr';

import request from '../../util/request';
import * as constants from './constants';
import { addEntities } from '../../entities/redux/actions';
import { product as productSchema } from '../../entities/api/schema';

/**
 * PRODUCTS_GET
 */
export const getProducts = (nextCursor) => async (dispatch) => {
  try {
    dispatch({ type: constants.PRODUCTS_GET.REQUEST });

    const payload = await request({
      url: '/products',
      method: 'GET',
      params: {
        nextCursor,
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
export const refreshProducts = () => async (dispatch) => {
  try {
    dispatch({ type: constants.PRODUCTS_REFRESH.REQUEST });

    const payload = await request({
      url: '/products',
      method: 'GET',
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

/**
 * PRODUCT_GET
 */
export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: constants.PRODUCT_GET.REQUEST });

    const payload = await request({
      url: `/products/${id}`,
      method: 'GET',
    });
    const { entities, result } = normalize(payload, productSchema);

    dispatch(addEntities(entities));
    dispatch({
      type: constants.PRODUCT_GET.SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_GET.FAIL,
      error,
    });
  } finally {
    dispatch({ type: constants.PRODUCT_GET.COMPLETE });
  }
};

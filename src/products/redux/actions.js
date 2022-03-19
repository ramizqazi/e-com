import { normalize } from 'normalizr';

import request from '../../util/request';
import * as constants from './constants';
import { addEntities } from '../../entities/redux/actions';
import { product as productSchema } from '../../entities/api/schema';

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
    const { entities } = normalize(payload, productSchema);

    dispatch(addEntities(entities));
    dispatch({ type: constants.PRODUCT_GET.SUCCESS });
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_GET.FAIL,
      error,
    });
  } finally {
    dispatch({ type: constants.PRODUCT_GET.COMPLETE });
  }
};

/**
 * PRODUCT_FIND
 */
export const productFind = (searchTxt, cb) => async (dispatch) => {
  try {
    dispatch({ type: constants.PRODUCT_FIND.REQUEST });

    const payload = await request({
      url: `/products/find?q=${searchTxt}`,
      method: 'GET',
    });
    const { entities, result } = normalize(payload.data, [productSchema]);

    dispatch(addEntities(entities));
    dispatch({ type: constants.PRODUCT_FIND.SUCCESS, payload: result });
    if (typeof cb === 'function') {
      cb(null, payload.data);
    }
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_FIND.FAIL,
      error,
    });
    if (typeof cb === 'function') {
      cb(error, null);
    }
  } finally {
    dispatch({ type: constants.PRODUCT_FIND.COMPLETE });
  }
};

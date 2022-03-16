import { normalize } from 'normalizr';

import request from '../../util/request';
import * as constants from './constants';
import { addEntities } from '../../entities/redux/actions';
import { product as productSchema } from '../../entities/api/schema';

/**
 * PRODUCT_GET
 */
// eslint-disable-next-line import/prefer-default-export
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

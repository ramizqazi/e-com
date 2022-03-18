import { normalize } from 'normalizr';

import request from '../../util/request';
import * as constants from './constants';
import { addEntities } from '../../entities/redux/actions';
import { user as userSchema } from '../../entities/api/schema';

/**
 *.WISHLIST_ADD
 */
export const addWishList = (id) => async (dispatch) => {
  try {
    dispatch({ type: constants.WISHLIST_ADD.REQUEST });

    const payload = await request({
      url: `/user/${id}/add_wishList`,
      method: 'POST',
    });
    const { entities } = normalize(payload, userSchema);

    dispatch(addEntities(entities));
    dispatch({ type: constants.WISHLIST_ADD.SUCCESS });
  } catch (error) {
    dispatch({
      type: constants.WISHLIST_ADD.FAIL,
      error,
    });
  } finally {
    dispatch({ type: constants.WISHLIST_ADD.COMPLETE });
  }
};

/**
 *.WISHLIST_REMOVE
 */
export const removeWishList = (id) => async (dispatch) => {
  try {
    dispatch({ type: constants.WISHLIST_REMOVE.REQUEST });

    const payload = await request({
      url: `/user/${id}/remove_wishList`,
      method: 'POST',
    });
    const { entities } = normalize(payload, userSchema);

    dispatch(addEntities(entities));
    dispatch({ type: constants.WISHLIST_REMOVE.SUCCESS });
  } catch (error) {
    dispatch({
      type: constants.WISHLIST_REMOVE.FAIL,
      error,
    });
  } finally {
    dispatch({ type: constants.WISHLIST_REMOVE.COMPLETE });
  }
};

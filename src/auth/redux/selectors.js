import { getUser as getUserDetails } from '../../entities/redux/selectors';

/**
 * Get loading
 */
export const getLoading = (state) => state.Auth.loading;

/**
 * Get error
 */
export const getError = (state) => state.Auth.error;

/**
 * Get user id
 */
export const getUserId = (state) => state.Auth.user;

/**
 * Get user
 */
export const getUser = (state) => getUserDetails(state, { id: getUserId(state) });

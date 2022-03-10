import * as constants from './constants';

/**
 * ENTITIES_ADD
 */
// eslint-disable-next-line import/prefer-default-export
export const addEntities = (payload) => ({
  type: constants.ENTITIES_ADD,
  payload,
});

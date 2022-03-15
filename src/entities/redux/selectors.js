import { denormalize } from 'normalizr';

import * as schema from '../api/schema';

/**
 * Get user by id
 */
export const getUser = (state, { id, normalized }) => (
  normalized
    ? state.Entities.users && state.Entities.users[id]
    : denormalize(id, schema.user, state.Entities)
);

/**
 * Get product by id
 */
export const getProduct = (state, { id, normalized }) => (
  normalized
    ? state.Entities.products && state.Entities.products[id]
    : denormalize(id, schema.product, state.Entities)
);

/**
 * Get store by id
 */
export const getStore = (state, { id, normalized }) => (
  normalized
    ? state.Entities.stores && state.Entities.stores[id]
    : denormalize(id, schema.store, state.Entities)
);

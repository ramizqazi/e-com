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
 * Get choice group by id
 */
// eslint-disable-next-line max-len
export const getChoiceGroup = (state, { id, normalized }) => (
  normalized
    ? state.Entities.choiceGroups && state.Entities.choiceGroups[id]
    : denormalize(id, schema.choiceGroup, state.Entities)
);

/**
 * Get choice by id
 */
export const getChoice = (state, { id, normalized }) => (
  normalized
    ? state.Entities.choices && state.Entities.choices[id]
    : denormalize(id, schema.choice, state.Entities)
);

/**
 * Get category by id
 */
export const getCategory = (state, { id, normalized }) => (normalized
  ? state.Entities.categories && state.Entities.categories[id]
  : denormalize(id, schema.category, state.Entities)
);

/**
 * Get store by id
 */
export const getStore = (state, { id, normalized }) => (
  normalized
    ? state.Entities.stores && state.Entities.stores[id]
    : denormalize(id, schema.store, state.Entities)
);

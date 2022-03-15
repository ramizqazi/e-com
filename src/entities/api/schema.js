import { schema } from 'normalizr';

export const user = new schema.Entity('users');

export const store = new schema.Entity('stores');

export const product = new schema.Entity('products', {
  store,
}, { idAttribute: '_id' });

export const order = new schema.Entity('orders', {
  items: [
    {
      product,
    },
  ],
  store,
});

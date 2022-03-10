import { schema } from 'normalizr';

export const user = new schema.Entity('users');

export const category = new schema.Entity('categories');

export const store = new schema.Entity('stores', {
  categories: [category],
});

export const choice = new schema.Entity('choices');

export const choiceGroup = new schema.Entity('choiceGroups', {
  choices: [choice],
});

export const product = new schema.Entity('products', {
  choiceGroups: [choiceGroup],
  category,
  store,
});

export const order = new schema.Entity('orders', {
  items: [
    {
      product,
      choices: [choice],
    },
  ],
  store,
});

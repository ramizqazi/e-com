import React from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import FlatList from 'flatlist-react';

import HomeHeader from '../components/HomeHeader';
import ProductCard from '../components/ProductCard';

const HomeScreen = () => {
  const [isSmaller1280] = useMediaQuery('(max-width: 766px)');

  return (
    <Box flex={1}>
      <HomeHeader />
      <Box p={2} maxW="1200px" margin="0 auto">
        <FlatList
          list={MOCK}
          displayGrid
          minColumnWidth={isSmaller1280 ? '170px' : '200px'}
          renderItem={renderItem}
          renderWhenEmpty={() => <div>List is empty!</div>}
        />
      </Box>
    </Box>
  );
};

const renderItem = (item) => <ProductCard product={item} />;

const MOCK = [
  {
    id: 1,
    name: 'Mens Causal T-Shirt',
    photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    about: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: 20,
    store: 'Levis',
  },
  {
    id: 2,
    name: 'Mens Causal T-Shirt',
    photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    about: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: 20,
    store: 'Levis',
  },
  {
    id: 3,
    name: 'Mens Causal T-Shirt',
    photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    about: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: 20,
    store: 'Levis',
  },
  {
    id: 4,
    name: 'Mens Causal T-Shirt',
    photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    about: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: 20,
    store: 'Levis',
  },
  {
    id: 4,
    name: 'Mens Causal T-Shirt',
    photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    about: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: 20,
    store: 'Levis',
  },
  {
    id: 4,
    name: 'Mens Causal T-Shirt',
    photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    about: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: 20,
    store: 'Levis',
  },
  {
    id: 4,
    name: 'Mens Causal T-Shirt',
    photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    about: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: 20,
    store: 'Levis',
  },
  {
    id: 4,
    name: 'Mens Causal T-Shirt',
    photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    about: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: 20,
    store: 'Levis',
  },
  {
    id: 4,
    name: 'Mens Causal T-Shirt',
    photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    about: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: 20,
    store: 'Levis',
  },
  {
    id: 4,
    name: 'Mens Causal T-Shirt',
    photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    about: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: 20,
    store: 'Levis',
  },
  {
    id: 4,
    name: 'Mens Causal T-Shirt',
    photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    about: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: 20,
    store: 'Levis',
  },
  {
    id: 4,
    name: 'Mens Causal T-Shirt',
    photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    about: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: 20,
    store: 'Levis',
  },
  {
    id: 4,
    name: 'Mens Causal T-Shirt',
    photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    about: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: 20,
    store: 'Levis',
  },
  {
    id: 4,
    name: 'Mens Causal T-Shirt',
    photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    about: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: 20,
    store: 'Levis',
  },
  {
    id: 4,
    name: 'Mens Causal T-Shirt',
    photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    about: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: 20,
    store: 'Levis',
  },
];

export default HomeScreen;

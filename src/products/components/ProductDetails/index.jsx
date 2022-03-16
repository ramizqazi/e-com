import React from 'react';
import {
  Flex,
  Text,
  Select,
  Button,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import {
  Heart, Minus, Plus, ShoppingCart,
} from 'react-feather';

import ProductDetailsPhotos from './ProductDetailsPhotos';
import ProductDetailsInfo from './ProductDetailsInfo';

import { getProduct } from '../../../entities/redux/selectors';

const ProductDetails = ({
  id,
  qty,
  product,
  onPlus,
  onMinus,
  selectedVariant,
  onVariantChange,
}) => {
  const variants = product?.variants;
  const variantOptions = variants?.map((variant) => ({
    key: variant?.name,
    value: variant?.name,
    title: variant.name,
  }));

  return (
    <Flex flexDir={['column', 'column', 'row']} align={['center', 'center', 'stretch']} mx={5}>
      <ProductDetailsPhotos id={id} />
      <VStack alignItems="flex-start" ml={5}>
        <ProductDetailsInfo id={id} selectedVariant={selectedVariant} />
        <HStack>
          <Button color="black" onClick={onPlus}><Plus /></Button>
          <Text>{qty}</Text>
          <Button color="black" onClick={onMinus}><Minus /></Button>
        </HStack>
        <HStack w="100%" justify="flex-end">
          {variants[0] && (
            <>
              <Text>Sizes:</Text>
              <Select value={selectedVariant} onChange={onVariantChange}>
                {variantOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.title}
                  </option>
                ))}
              </Select>
            </>
          )}
          <HStack>
            <Button color="black" leftIcon={<Heart color="red" />}>Add to Wish list</Button>
            <Button color="black" leftIcon={<ShoppingCart color="red" />}>Add to Cart</Button>
          </HStack>
        </HStack>
      </VStack>
    </Flex>
  );
};

const mapStateToProps = (state, { id }) => ({
  product: getProduct(state, { id }),
});

// eslint-disable-next-line max-len
const propsAreEqual = (prevProps, nextProps) => prevProps.id === nextProps.id
&& prevProps.qty === nextProps.qty
&& prevProps.selectedVariant === nextProps.selectedVariant
&& prevProps.variants?.name === nextProps.variants?.name
&& prevProps.variants?.price === nextProps.variants?.price;

export default connect(mapStateToProps)(React.memo(ProductDetails, propsAreEqual));

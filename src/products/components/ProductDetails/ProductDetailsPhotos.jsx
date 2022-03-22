import React, { useState } from 'react';
import { Box, HStack, Image } from '@chakra-ui/react';
import { connect } from 'react-redux';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import { getProduct } from '../../../entities/redux/selectors';

const ProductDetailsPhotos = ({ product }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const photos = product?.photos;

  return (
    <Box w="100%" p={0}>
      <Slider slideIndex={0} onSlideChange={(e) => setSlideIndex(e.slideIndex)}>
        {photos.map((photo) => (
          <Box
            key={photo}
            bgPos="center"
            bgSize="cover"
            bgRepeat="no-repeat"
          >
            <Image w="100%" h="auto" src={photo} />
          </Box>
        ))}
      </Slider>
      <HStack spacing={5} my={5} justify="center">
        {photos.map((p, i) => (
          <Box
            w="70px"
            h="70px"
            borderRadius="5px"
            borderColor={slideIndex === i ? 'red.500' : 'gray.400'}
            borderWidth={slideIndex === i ? '2px' : '1px'}
          >
            <Image w="100%" h="100%" src={p} />
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

const mapStateToProps = (state, { id }) => ({
  product: getProduct(state, { id }),
});

// eslint-disable-next-line max-len
const propsAreEqual = (prevProps, nextProps) => prevProps.product?.photos.toString()
 === nextProps.product?.photos.toString();

export default connect(mapStateToProps)(React.memo(ProductDetailsPhotos, propsAreEqual));

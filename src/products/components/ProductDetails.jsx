import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  HStack,
  useMediaQuery,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { Heart, ShoppingCart } from 'react-feather';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { getProduct } from '../../entities/redux/selectors';

const ProductDetails = ({ product }) => {
  const [iSmallerThen766] = useMediaQuery('(max-width: 766px)');

  const store = product?.store?.name;
  const name = product?.name;
  const about = product?.about;
  const price = product?.price;
  const photos = product?.photos;

  const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: true,
    showIndicators: true,
    infiniteLoop: true,
    width: iSmallerThen766 ? 'auto' : '500px',
    showThumbs: true,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    emulateTouch: true,
    autoFocus: false,
    thumbWidth: 80,
    selectedItem: 0,
    interval: 5000,
    transitionTime: 500,
    swipeScrollTolerance: 5,
    ariaLabel: 'ariaLabel',
    renderThumbs: (items) => items.map(createCarouselItemImage),
  });
  const createCarouselItemImage = (_, index) => (
    <Box key={index}>
      <Image src={photos[index]} alt="" />
    </Box>
  );

  return (
    <Flex flexDir={['column', 'column', 'row']} align={['center', 'center', 'flex-start']} mx={5}>
      <Carousel {...getConfigurableProps()} swipeable>
        {photos.map((photo) => (
          <Box w={['auto', 'auto', '500px']} h={['auto', 'auto', '500px']}>
            <Image alt="Test Image" src={photo} />
          </Box>
        ))}
      </Carousel>
      <Box ml={5}>
        <Text color="black" fontWeight="semibold" fontSize="2xl">{store}</Text>
        <Text color="black" fontWeight="bold" fontSize="4xl">{name}</Text>
        <Text color="black" fontWeight="bold">{about}</Text>
        <Text fontSize="2xl" fontWeight="bold" my={5} color="brand">{`$${price}`}</Text>
        <HStack justify="flex-end">
          <Button color="black" leftIcon={<Heart color="red" />}>Add to Wish list</Button>
          <Button color="black" leftIcon={<ShoppingCart color="red" />}>Add to Cart</Button>
        </HStack>
      </Box>
    </Flex>
  );
};

const mapStateToProps = (state, { id }) => ({
  product: getProduct(state, { id }),
});

export default connect(mapStateToProps)(ProductDetails);

import React from 'react';
import {
  Box,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { getProduct } from '../../../entities/redux/selectors';

const ProductDetailsPhotos = ({ product }) => {
  const [iSmallerThen766] = useMediaQuery('(max-width: 766px)');

  const photos = product?.photos;

  const getConfigurableProps = () => ({
    showArrows: false,
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
      <Image h="85px" src={photos[index]} alt="" />
    </Box>
  );

  return (
    <Carousel {...getConfigurableProps()} swipeable>
      {photos?.map((photo) => (
        <Box key={photo} w={['auto', 'auto', '500px']} h={['auto', 'auto', '450px']}>
          <Image alt="Test Image" src={photo} />
        </Box>
      ))}
    </Carousel>
  );
};

const mapStateToProps = (state, { id }) => ({
  product: getProduct(state, { id }),
});

// eslint-disable-next-line max-len
const propsAreEqual = (prevProps, nextProps) => prevProps.product?.photos.toString()
 === nextProps.product?.photos.toString();

export default connect(mapStateToProps)(React.memo(ProductDetailsPhotos, propsAreEqual));

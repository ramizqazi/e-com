import {
  Box, Button,
} from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import DealsContent from '../../config/Deals';
import '../../config/DealsSlider.css';
import '../../config/DealsSliderAnimation.css';

const HomeDeals = () => (
  <Slider className="slider-wrapper">
    {DealsContent.map((item, index) => (
      <Box
        bgPos="center"
        bgSize="cover"
        bgColor={item.color}
        key={item.title}
        bgImg={item.image}
        bgRepeat="no-repeat"
        className="slider-content"
      >
        <Box className="inner">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <Button colorScheme={item.color}>{item.button}</Button>
        </Box>
      </Box>
    ))}
  </Slider>
);

export default HomeDeals;

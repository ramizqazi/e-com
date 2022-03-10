import React from 'react';
import { Flex } from '@chakra-ui/react';

const HeaderButtonBadge = ({ count }) => (
  <Flex
    position="absolute"
    right={1}
    width="16px"
    height="16px"
    align="center"
    justify="center"
    bgColor="red"
    color="white"
    fontSize="10px"
    fontWeight="bold"
    borderRadius="50%"
  >
    {count}
  </Flex>
);

export default HeaderButtonBadge;

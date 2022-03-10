import React from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

const HeaderSearch = () => (
  <InputGroup mb={2} maxW="550px" cursor="pointer">
    <Input color="black" borderRadius="20px" bgColor="white" />
    <InputRightElement px={9} color="white" borderRightRadius="20px" bgColor="red.600">
      Search
    </InputRightElement>
  </InputGroup>
);

export default HeaderSearch;

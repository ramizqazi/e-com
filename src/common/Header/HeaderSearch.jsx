import React, { useState } from 'react';
import {
  Input,
  Spinner,
  InputGroup,
  InputRightElement,
  useMediaQuery,
  FormControl,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { productFind as productFindAction } from '../../products/redux/actions';

const HeaderSearch = ({ productFind }) => {
  const history = useHistory();

  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const _handleSearchClick = async (e) => {
    e.preventDefault();
    if (value) {
      setLoading(true);
      await productFind(value, () => history.push(`/search?q=${value}`));
      setLoading(false);
      setValue('');
    }
  };
  const _handleEnterPress = async (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      if (value) {
        setLoading(true);
        await productFind(value, () => history.push(`/search?q=${value}`));
        setLoading(false);
        setValue('');
      }
    }
  };

  return (
    <FormControl maxW="550px" onKeyUp={_handleEnterPress} onSubmit={_handleSearchClick}>
      <InputGroup mb={2} cursor="pointer">
        <Input value={value} color="black" onChange={(e) => setValue(e.target.value)} borderRadius="20px" bgColor="white" />
        <InputRightElement
          px={9}
          color="white"
          type="submit"
          bgColor="red.600"
          borderRightRadius="20px"
          onClick={_handleSearchClick}
        >
          {loading ? <Spinner /> : 'Search'}
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

const mapDispatchToProps = {
  productFind: productFindAction,
};

export default connect(null, mapDispatchToProps)(HeaderSearch);

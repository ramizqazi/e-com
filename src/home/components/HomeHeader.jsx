import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Tabs,
  Tab,
  HStack,
  TabList,
} from '@chakra-ui/react';

import { getCategory } from '../redux/selectors';
import { setCategory as setCategoryAction } from '../redux/actions';

/* =============================================================================
<HomeHeader />
============================================================================= */
const HomeHeader = ({ category, setCategory }) => {
  const [tabIndex, setTabIndex] = useState(0);

  // Set current active tab
  useEffect(() => {
    switch (category) {
      case 'all':
        setTabIndex(0);
        break;
      case 'men':
        setTabIndex(1);
        break;
      case 'women':
        setTabIndex(2);
        break;
      case 'electronics':
        setTabIndex(3);
        break;
      case 'jewelry':
        setTabIndex(4);
        break;
      default:
        break;
    }
  }, [category]);

  const _handleTabChange = (value) => {
    setTabIndex(value);
    switch (value) {
      case 0:
        setCategory('all');
        break;
      case 1:
        setCategory('men');
        break;
      case 2:
        setCategory('women');
        break;
      case 3:
        setCategory('electronics');
        break;
      case 4:
        setCategory('jewelry');
        break;
      default:
        break;
    }
  };

  return (
    <HStack mb={10} justify="space-between" boxShadow="0 5px 5px 0 rgba(0,0,0,0.2)">
      <Tabs
        flex={1}
        maxW="1200px"
        margin="0 auto"
        overflow="auto"
        colorScheme="red"
        index={tabIndex}
        onChange={_handleTabChange}
      >
        <TabList>
          <Tab color="black">All</Tab>
          <Tab color="black">Mens</Tab>
          <Tab color="black">Women</Tab>
          <Tab color="black">Electronics</Tab>
          <Tab color="black">Jewelry</Tab>
        </TabList>
      </Tabs>
    </HStack>
  );
};

const mapStateToProps = (state) => ({
  category: getCategory(state),
});

const mapDispatchToProps = {
  setCategory: setCategoryAction,
};

const propsAreEqual = (prevProps, nextProps) => prevProps.type === nextProps.type;

/* Export
============================================================================= */
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(HomeHeader, propsAreEqual));

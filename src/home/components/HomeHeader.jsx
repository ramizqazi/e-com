import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
import {
  Tabs,
  Tab,
  HStack,
  TabList,
} from '@chakra-ui/react';

// import { getType } from '../../redux/selectors';
// import { setType as setTypeAction } from '../../redux/actions';

/* =============================================================================
<HomeHeader />
============================================================================= */
const HomeHeader = ({ type, setType }) => {
  const [tabIndex, setTabIndex] = useState(0);

  // Set current active tab
  useEffect(() => {
    switch (type) {
      case 'all':
        setTabIndex(0);
        break;
      case 'delivery':
        setTabIndex(1);
        break;
      case 'take_away':
        setTabIndex(2);
        break;
      default:
        break;
    }
  }, [type]);

  const _handleTabChange = (value) => {
    setTabIndex(value);
    switch (value) {
      case 0:
        setType('all');
        break;
      case 1:
        setType('delivery');
        break;
      case 2:
        setType('take_away');
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

// const mapStateToProps = (state) => ({
//   type: getType(state),
// });

// const mapDispatchToProps = {
//   setType: setTypeAction,
// };

// const propsAreEqual = (prevProps, nextProps) => prevProps.type === nextProps.type;

/* Export
============================================================================= */
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(React.memo(HomeHeader, propsAreEqual));
export default HomeHeader;

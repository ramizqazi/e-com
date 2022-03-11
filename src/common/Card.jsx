import React from 'react';
import { Box, useStyleConfig } from '@chakra-ui/react';

/* =============================================================================
<Card />
============================================================================= */
const Card = ({ variant, ...props }) => {
  const styles = useStyleConfig('Card', { variant });
  return <Box __css={styles} {...props} />;
};

/* Export
============================================================================= */
export default Card;

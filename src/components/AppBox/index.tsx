import React from 'react';
import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';

const AppBox: React.FC<BoxProps> = props => {
  const bg = useColorModeValue('gray.50', 'gray.700');

  return <Box bg={bg} boxShadow="base" borderRadius="md" {...props} />;
};

export default AppBox;

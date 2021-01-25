import React from 'react';
import {
  Box,
  BoxProps,
  chakra,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

interface BoxHeaderProps {
  title: string;
}

const AppBox: React.FC<BoxProps> = props => {
  const bg = useColorModeValue('widgetLightColorMode', 'widgetDarkColorMode');

  return <Box bg={bg} boxShadow="base" borderRadius="md" {...props} />;
};

export const BoxHeader: React.FC<BoxHeaderProps> = ({ title, children }) => {
  return (
    <Flex flexDir="row" align="center" justify="space-between" className="fxl">
      <chakra.h2
        aria-label="title"
        padding="1.25em"
        lineHeight="1em"
        fontWeight="semibold"
      >
        {title}
      </chakra.h2>
      {children}
    </Flex>
  );
};

export default AppBox;

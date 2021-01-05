import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import defaultImage from './background.jpg';

interface BackgroundProps {
  image?: string;
  ribbonSide?: 'left' | 'right';
}

const HomeBackground: React.FC<BackgroundProps> = ({ image, ribbonSide }) => (
  <Flex
    position="absolute"
    left="0"
    top="0"
    direction={ribbonSide === 'right' ? 'row-reverse' : 'row'}
    w="100vw"
    h="100vh"
    zIndex="-1"
    display="flex"
    alignItems="stretch"
  >
    <Box width={{ base: '100%', md: '260px' }} background="gradient" />

    <Box
      flexGrow={1}
      backgroundImage={`url(${image || defaultImage})`}
      backgroundPosition="center center"
      backgroundSize="cover"
      position="relative"
      _before={{
        content: '""',
        background: 'theme.500',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        opacity: '0.6',
      }}
    />
  </Flex>
);

export default HomeBackground;

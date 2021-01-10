import React from 'react';
import Image from 'next/image';
import { Avatar, Box, Flex, HStack, IconButton } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { FiBell, FiSettings } from 'react-icons/fi';

import logoImg from '../../../assets/images/logo-light-color-mode.svg';

const Header: React.FC = () => {
  return (
    <Flex dir="row" align="center" justify="space-between" height="70px">
      <Flex dir="row" align="center" padding="0 0 0 20px">
        <IconButton aria-label="Menu" variant="ghost" icon={<FaBars />} />
        <Box margin="0 0 0 10px" lineHeight="1">
          <Image src={logoImg} width={155} height={42} alt="Logotipo" />
        </Box>
      </Flex>

      <Flex dir="row" align="center" padding="0 20px 0 0">
        <HStack spacing="0" mr="1em">
          <IconButton
            aria-label="Notifications"
            variant="ghost"
            icon={<FiBell />}
          />
          <IconButton
            aria-label="Configurações"
            variant="ghost"
            icon={<FiSettings />}
          />
        </HStack>

        <Avatar size="md" name="John Doe" src="/assets/images/avatar.png" />
      </Flex>
    </Flex>
  );
};

export default Header;

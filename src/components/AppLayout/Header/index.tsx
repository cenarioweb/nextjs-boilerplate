import React from 'react';
import Image from 'next/image';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { FiBell, FiSettings } from 'react-icons/fi';

import lightModeLogo from '../../../assets/images/logo-light-color-mode.svg';
import darkModeLogo from '../../../assets/images/logo-dark-color-mode.svg';

import SwitchColorMode from '../../SwitchColorMode';

const Header: React.FC = () => {
  const bgColor = useColorModeValue('white', 'black');
  const logoImg = useColorModeValue(lightModeLogo, darkModeLogo);

  return (
    <Flex
      dir="row"
      align="center"
      justify="space-between"
      height="70px"
      bgColor={bgColor}
    >
      <Flex dir="row" align="center" padding="0 0 0 20px">
        <IconButton aria-label="Menu" variant="ghost" icon={<FaBars />} />
        <Box margin="0 0 0 10px" lineHeight="1">
          <Image src={logoImg} width={155} height={42} alt="Logotipo" />
        </Box>
      </Flex>

      <Flex dir="row" align="center" padding="0 20px 0 0">
        <HStack spacing="0" mr="1em">
          <SwitchColorMode />

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

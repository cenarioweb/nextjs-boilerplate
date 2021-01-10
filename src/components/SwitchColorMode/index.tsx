import React from 'react';
import { IconButton, Tooltip, useColorMode } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

const SwitchColorMode: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip
      hasArrow
      shouldWrapChildren
      label={colorMode === 'light' ? 'Modo escuro' : 'Modo claro'}
    >
      <IconButton
        onClick={toggleColorMode}
        aria-label={colorMode === 'light' ? 'Modo escuro' : 'Modo claro'}
        icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
        variant="ghost"
      />
    </Tooltip>
  );
};

export default SwitchColorMode;

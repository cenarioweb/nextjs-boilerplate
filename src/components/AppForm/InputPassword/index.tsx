import { Box, Flex, FormLabel, Input, Text, Tooltip } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  isRequired?: boolean;
}

const InputPassword: React.FC<InputProps> = ({
  id,
  name,
  label,
  placeholder,
  isRequired,
}) => {
  // alterando a cor da borda quando o input recebe o foco
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleTogglePassword = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <Box
      bgColor="#ffffff"
      borderWidth="1px"
      borderColor={isFocused ? 'theme.300' : 'gray.200'}
      borderStyle="solid"
      borderRadius="md"
      marginBottom={2}
      padding="3px 8px"
    >
      <FormLabel
        htmlFor={id}
        fontSize="sm"
        fontWeight="normal"
        margin="0"
        color="gray.500"
      >
        {label}
        {isRequired && (
          <Text as="span" color="yellow.400" pl={1}>
            *
          </Text>
        )}
      </FormLabel>
      <Flex w="100%" dir="row" align="center">
        <Input
          type={isVisible ? 'text' : 'password'}
          variant="unstyled"
          fontWeight="semibold"
          padding="1px 0"
          id={id}
          name={name}
          placeholder={placeholder}
          _placeholder={{ color: 'gray.300' }}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <Box
          padding="4px"
          color="gray.700"
          _hover={{ cursor: 'pointer' }}
          _focus={{ outline: 'none' }}
          onClick={handleTogglePassword}
        >
          <Tooltip
            label={isVisible ? 'Ocultar senha' : 'Exibir senha'}
            fontSize="md"
            placement="top"
            shouldWrapChildren
            hasArrow
          >
            {isVisible ? <FaEyeSlash className="xxxx" /> : <FaEye />}
          </Tooltip>
        </Box>
      </Flex>
    </Box>
  );
};

export default InputPassword;

import {
  Box,
  Flex,
  FormLabel,
  Input,
  ResponsiveValue,
  Text,
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';

interface InputProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  isRequired?: boolean;
  textTransform?: 'none' | 'uppercase' | 'lowercase';
}

const InputText: React.FC<InputProps> = ({
  id,
  name,
  label,
  placeholder,
  isRequired,
  textTransform,
}) => {
  // alterando a cor da borda quando o input recebe o foco
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

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
          type="text"
          variant="unstyled"
          fontWeight="semibold"
          padding="1px 0"
          id={id}
          name={name}
          placeholder={placeholder}
          _placeholder={{ color: 'gray.300' }}
          textTransform={textTransform}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </Flex>
    </Box>
  );
};

export default InputText;

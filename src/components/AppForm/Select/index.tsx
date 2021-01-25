/* eslint-disable no-nested-ternary */
import React, { CSSProperties, useCallback, useState } from 'react';
import ReactSelect, { Styles, StylesConfig } from 'react-select';
import {
  Box,
  Flex,
  FormLabel,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { OptionProps } from 'react-select/src/types';

interface SelectProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  isRequired?: boolean;
}

const Select: React.FC<SelectProps> = ({
  id,
  name,
  label,
  placeholder,
  isRequired,
}) => {
  const labelColor = useColorModeValue('gray.400', 'gray.500');
  const bgColor = useColorModeValue('#ffffff', '#151a23');
  const borderColor = useColorModeValue('gray.200', '#283143');
  const focusedBorderColor = useColorModeValue('theme.300', 'theme.600');
  const placeHolderColor = useColorModeValue('gray.400', 'gray.600');

  const optionColor = {
    text: {
      disabled: useColorModeValue('#CBD5E0', '#A0AEC0'),
      focused: useColorModeValue('#718096', '#EDF2F7'),
      selected: useColorModeValue('#231717', '#F7FAFC'),
      active: useColorModeValue('#CBD5E0', '#4A5568'),
      default: useColorModeValue('#718096', '#EDF2F7'),
    },
    background: {
      disabled: useColorModeValue('#ffffff', '#000000'),
      focused: useColorModeValue('#EDF2F7', '#1A202C'),
      selected: useColorModeValue('#E2E8F0', '#2D3748'),
      active: useColorModeValue('#4A5568', '#EDF2F7'),
      default: useColorModeValue('#ffffff', '#000000'),
    },
  };

  // alterando a cor da borda quando o input recebe o foco
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const customStyles = {
    control: (styles: CSSProperties) => ({
      ...styles,
      backgroundColor: 'transparent',
      border: 0,
      boxShadow: 'none',
      minHeight: '28px',
      width: '100%',
      display: 'flex',
      // flexDirection: 'row',
      padding: 0,
      margin: 0,
      outline: 0,
      '&:hover': {
        ...styles['&:hover'],
        borderWidth: 0,
      },
    }),
    input: (styles: CSSProperties) => ({
      ...styles,
      padding: 0,
    }),
    valueContainer: (styles: CSSProperties) => ({
      ...styles,
      padding: '0 6px',
    }),
    indicatorSeparator: (styles: CSSProperties) => ({
      ...styles,
      display: 'none',
    }),
    singleValue: (styles: CSSProperties) => ({
      ...styles,
      color: optionColor.text.default,
      fontWeight: 600,
      '&:placeholder': {
        ...styles['&:placeholder'],
        color: placeHolderColor,
      },
    }),
    clearIndicator: (styles: CSSProperties) => ({
      ...styles,
      padding: '0 4px',
    }),
    dropdownIndicator: (styles: CSSProperties) => ({
      ...styles,
      padding: '0 4px',
    }),
    menu: (styles: CSSProperties) => ({
      ...styles,
      backgroundColor: bgColor,
      margin: '4px 0 0 0',
    }),
    option: (styles: CSSProperties, state: OptionProps) => {
      const color = state.isDisabled
        ? optionColor.text.disabled
        : state.isSelected
        ? optionColor.text.selected
        : state.isFocused
        ? optionColor.text.focused
        : optionColor.text.default;

      const backgroundColor = state.isDisabled
        ? optionColor.background.disabled
        : state.isSelected
        ? optionColor.background.selected
        : state.isFocused
        ? optionColor.background.focused
        : optionColor.background.default;

      return {
        ...styles,
        border: '0',
        padding: '2px 8px',
        color,
        backgroundColor,
        '&:active': {
          ...styles['&:active'],
          color: !state.isDisabled && optionColor.text.active,
          backgroundColor: !state.isDisabled && optionColor.background.active,
        },
      };
    },
  };

  return (
    <Box
      bgColor={bgColor}
      borderWidth="1px"
      borderColor={isFocused ? focusedBorderColor : borderColor}
      borderStyle="solid"
      borderRadius="md"
      marginBottom={2}
      padding="2px 0"
    >
      <FormLabel
        htmlFor={id}
        fontSize="sm"
        fontWeight="normal"
        margin="0 8px"
        color={labelColor}
      >
        {label}
        {isRequired && (
          <Text as="span" color="yellow.400" pl={1}>
            *
          </Text>
        )}
      </FormLabel>
      <Flex w="100%" dir="row" align="center" className="select-container">
        <Box flexGrow={1}>
          <ReactSelect
            styles={customStyles}
            inputId={id}
            name={name}
            placeholder={placeholder}
            isClearable
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            options={[
              {
                value: 'male',
                label: 'Male',
              },
              {
                value: 'female',
                label: 'Female',
              },
            ]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Select;

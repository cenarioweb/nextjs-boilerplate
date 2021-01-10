import React from 'react';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { format } from 'date-fns';

const Footer: React.FC = () => {
  const textColor = useColorModeValue('gray.400', 'gray.500');

  return (
    <Flex direction="row" justify="space-between" padding="30px 20px 20px 10px">
      <Text fontSize="sm" color={textColor}>
        {format(new Date(), 'yyyy')} &copy; CODE Soft Development
      </Text>
      <Text fontSize="sm" color={textColor}>
        Termos de uso | Política de privacidade
      </Text>
    </Flex>
  );
};

export default Footer;

import React from 'react';
import {
  Avatar,
  Box,
  chakra,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { addDays, format } from 'date-fns';
import footerImg from './footer.png';

interface UserProps {
  name: string;
  avatarUri: string;
  birthDate: string;
}

const User: React.FC<UserProps> = ({ name, avatarUri, birthDate }) => {
  return (
    <Flex direction="row" alignItems="center">
      <chakra.figure>
        <Avatar size="md" name="Kent Dodds" src={avatarUri} />
      </chakra.figure>
      <Box paddingLeft="10px">
        <Text lineHeight={1.4} fontWeight="semibold">
          {name}
        </Text>
        <Text lineHeight={1} fontWeight="semibold" fontSize="sm">
          {birthDate}
        </Text>
      </Box>
    </Flex>
  );
};

const NextBirthdays: React.FC = () => {
  const bgColor = useColorModeValue('purple.300', 'purple.600');

  return (
    <Flex
      bgColor={bgColor}
      direction="column"
      align="center"
      justify="space-between"
      borderRadius="md"
      overflow="hidden"
    >
      <Box>
        <Heading has="h4" size="md" padding="20px">
          Upcoming birthdays
        </Heading>
      </Box>
      <List>
        <ListItem padding="10px 20px">
          <User
            name="Michele Platt"
            avatarUri="/assets/demo/fake-avatar-02.jpg"
            birthDate={format(addDays(new Date(), 2), 'MMMM, do')}
          />
        </ListItem>
        <ListItem padding="10px 20px">
          <User
            name="Gregory Fennell"
            avatarUri="/assets/demo/fake-avatar-04.jpg"
            birthDate={format(addDays(new Date(), 6), 'MMMM, do')}
          />
        </ListItem>
      </List>
      <Box className="footer">
        <Image src={footerImg} width="100%" />
      </Box>
    </Flex>
  );
};

export default NextBirthdays;

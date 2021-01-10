import React from 'react';
import {
  Box,
  chakra,
  Flex,
  Heading,
  IconProps,
  Image,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import {
  HiOutlineCalendar,
  HiOutlineChatAlt2,
  HiOutlineClock,
  HiOutlineExclamationCircle,
  HiOutlineSpeakerphone,
} from 'react-icons/hi';

import imgLightMode from './man-on-laptop-lightmode.svg';
import imgDarkMode from './man-on-laptop-darkmode.svg';

interface NoticeProps {
  text: string;
  href: string;
  icon?: IconProps;
  textColor?: string;
  hoverColor?: string;
}

const Notice: React.FC<NoticeProps> = ({
  text,
  icon,
  href,
  textColor,
  hoverColor,
}) => {
  const defaultTextColor = useColorModeValue('blue.600', 'blue.400');
  const defaultHoverColor = useColorModeValue('blue.800', 'blue.200');

  return (
    <Link href={href} passHref>
      <chakra.a
        display="flex"
        flexDirection="row"
        alignItems="center"
        color={textColor || defaultTextColor}
        _hover={{ color: hoverColor || defaultHoverColor }}
      >
        {icon || <HiOutlineSpeakerphone />}
        <Text
          lineHeight={1}
          fontSize="md"
          fontWeight="semibold"
          paddingLeft="4px"
        >
          {text}
        </Text>
      </chakra.a>
    </Link>
  );
};

const Welcome: React.FC = () => {
  const bgColor = useColorModeValue('blue.200', 'blue.700');
  const welcomeImg = useColorModeValue(imgLightMode, imgDarkMode);

  const notices: NoticeProps[] = [
    {
      text: 'You have 3 overdue tasks.',
      href: '#',
      icon: <HiOutlineExclamationCircle />,
      textColor: useColorModeValue('red.500', 'red.400'),
      hoverColor: useColorModeValue('red.700', 'red.200'),
    },
    {
      text: 'You have 2 tasks to complete this week.',
      href: '#',
      icon: <HiOutlineCalendar />,
    },
    {
      text: '3 tasks have not yet started.',
      href: '#',
      icon: <HiOutlineClock />,
    },
    {
      text: 'No meeting scheduled for the next 7 days.',
      href: '',
      icon: <HiOutlineChatAlt2 />,
    },
  ];

  return (
    <Flex
      bgColor={bgColor}
      direction="row"
      align="center"
      justify="space-between"
      padding="42px"
      borderRadius="md"
    >
      <Box>
        <Heading has="h2">Hello, John!</Heading>
        <List paddingTop="10px" spacing={2}>
          {notices.map(notice => (
            <ListItem key={notice.text}>
              <Notice
                href={notice.href}
                text={notice.text}
                icon={notice.icon}
                textColor={notice.textColor}
                hoverColor={notice.hoverColor}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Image src={welcomeImg} height="180px" />
      </Box>
    </Flex>
  );
};

export default Welcome;

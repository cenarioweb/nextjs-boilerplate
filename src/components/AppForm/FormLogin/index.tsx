import React, { useCallback } from 'react';
import Image from 'next/image';
import { Form } from '@unform/web';
import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import AppBox from '../../AppBox';
import { InputText, InputPassword } from '..';

import lightModeLogo from '../../../assets/images/logo-light-color-mode.svg';
import darkModeLogo from '../../../assets/images/logo-dark-color-mode.svg';

import AppLink from '../../AppLink';
import MotionBox from '../../MotionBox';

const FormLogin: React.FC = () => {
  const logoImg = useColorModeValue(lightModeLogo, darkModeLogo);

  const handleSubmit = useCallback(() => {
    return null;
  }, []);

  return (
    <MotionBox
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      width={{ base: '100%', md: 'auto' }}
    >
      <AppBox
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width={{ base: '100%', md: '480px' }}
        padding={{ base: '40px 30px', md: '40px 60px' }}
        height="100%"
      >
        <Image src={logoImg} alt="Logo" width={258} height={70} />

        <Form onSubmit={handleSubmit}>
          <Heading textAlign="center" size="lg" margin="40px 0 20px 0">
            Sign In
          </Heading>
          <fieldset>
            <InputText
              id="email"
              name="email"
              label="Your e-mail"
              placeholder="user@company.com"
            />
            <InputPassword
              id="password"
              name="password"
              label="Your Password"
              placeholder="********"
            />
            <Button type="submit" colorScheme="theme" isFullWidth>
              Let me in
            </Button>
          </fieldset>
          <fieldset>
            <AppLink href="/forgot-password">
              <Button colorScheme="theme" variant="ghost" isFullWidth>
                Lost password?
              </Button>
            </AppLink>
          </fieldset>
        </Form>
        <Box marginTop="40px">
          <Text>
            <AppLink href="#">Terms of Service</AppLink>
          </Text>
          <Text>
            <AppLink href="#">Privacy Statement</AppLink>
          </Text>
        </Box>
      </AppBox>
    </MotionBox>
  );
};

export default FormLogin;

import React, { useCallback } from 'react';
import Image from 'next/image';
import { Form } from '@unform/web';
import { Button, Heading, useColorModeValue } from '@chakra-ui/react';

import AppBox from '../../AppBox';
import InputText from '../InputText';

import lightModeLogo from '../../../assets/images/logo-light-color-mode.svg';
import darkModeLogo from '../../../assets/images/logo-dark-color-mode.svg';

import AppLink from '../../AppLink';
import MotionBox from '../../MotionBox';

const FormForgotPassword: React.FC = () => {
  const logoImg = useColorModeValue(lightModeLogo, darkModeLogo);

  const handleSubmit = useCallback(() => {
    return null;
  }, []);

  return (
    <MotionBox
      initial={{ opacity: 0, x: 100 }}
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
            Password recovery
          </Heading>
          <fieldset>
            <InputText
              id="email"
              name="email"
              label="Your e-mail"
              placeholder="user@company.com"
            />
            <Button type="submit" colorScheme="theme" isFullWidth>
              Recovery my password
            </Button>
          </fieldset>
          <fieldset>
            <AppLink href="/">
              <Button colorScheme="theme" variant="ghost" isFullWidth>
                Back to Sign In
              </Button>
            </AppLink>
          </fieldset>
        </Form>
      </AppBox>
    </MotionBox>
  );
};

export default FormForgotPassword;

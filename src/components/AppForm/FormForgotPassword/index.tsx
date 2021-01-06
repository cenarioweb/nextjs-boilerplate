import React, { useCallback } from 'react';
import Image from 'next/image';
import { Form } from '@unform/web';
import { motion } from 'framer-motion';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

import AppBox from '../../AppBox';
import InputText from '../InputText';

import logoImg from '../../../assets/images/logo-light-color-mode.svg';
import AppLink from '../../AppLink';
import MotionBox from '../../MotionBox';

const FormForgotPassword: React.FC = () => {
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
            Recuperar senha
          </Heading>
          <fieldset>
            <InputText
              id="email"
              name="email"
              label="Seu e-mail"
              placeholder="usuario@empresa.com"
            />
            <Button type="submit" colorScheme="theme" isFullWidth>
              Recuperar
            </Button>
          </fieldset>
          <fieldset>
            <AppLink href="/">
              <Button colorScheme="theme" variant="ghost" isFullWidth>
                Voltar para login
              </Button>
            </AppLink>
          </fieldset>
        </Form>
      </AppBox>
    </MotionBox>
  );
};

export default FormForgotPassword;

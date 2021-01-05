import React, { useCallback } from 'react';
import Image from 'next/image';
import { Form } from '@unform/web';
import { motion } from 'framer-motion';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

import AppBox from '../../AppBox';
import InputText from '../InputText';

import logoImg from '../../../assets/images/logo-light-color-mode.svg';
import AppLink from '../../AppLink';

const FormForgotPassword: React.FC = () => {
  const handleSubmit = useCallback(() => {
    return null;
  }, []);

  return (
    <motion.div>
      <AppBox
        display="flex"
        flexDirection="column"
        justifyContent="stretch"
        width="480px"
        padding={{ base: '40px 30px', md: '40px 60px' }}
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
    </motion.div>
  );
};

export default FormForgotPassword;

import React, { useCallback } from 'react';
import Image from 'next/image';
import { Form } from '@unform/web';
import { motion } from 'framer-motion';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

import AppBox from '../../AppBox';
import InputText from '../InputText';

import logoImg from '../../../assets/images/logo-light-color-mode.svg';
import AppLink from '../../AppLink';

const FormLogin: React.FC = () => {
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
            Acesso ao sistema
          </Heading>
          <fieldset>
            <InputText
              id="email"
              name="email"
              label="Seu e-mail"
              placeholder="usuario@empresa.com"
            />
            <InputText
              id="password"
              name="password"
              label="Sua senha"
              placeholder="s3nhaf0rte"
              isRequired
            />
            <Button type="submit" colorScheme="theme" isFullWidth>
              Entrar
            </Button>
          </fieldset>
          <fieldset>
            <AppLink href="/forgot-password">
              <Button colorScheme="theme" variant="ghost" isFullWidth>
                Esqueci minha senha
              </Button>
            </AppLink>
          </fieldset>
        </Form>
        <Box marginTop="40px">
          <Text>
            <AppLink href="#">Termos de uso</AppLink>
          </Text>
          <Text>
            <AppLink href="#">Política de privacidade</AppLink>
          </Text>
        </Box>
      </AppBox>
    </motion.div>
  );
};

export default FormLogin;

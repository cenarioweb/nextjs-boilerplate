import React from 'react';
import Head from 'next/head';
import { Button, Flex, Heading, Image } from '@chakra-ui/react';

import AppBox from '../components/AppBox';

import HomeBackground from '../components/HomeBackground';

import logoImg from '../assets/images/logo-light-color-mode.svg';
import backgroundImage from '../assets/images/login-background.jpg';
import AppLink from '../components/AppLink';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>SignIn</title>
      </Head>
      <Flex
        direction="row"
        alignItems="center"
        width="100vw"
        height="100vh"
        padding="60px"
        position="relative"
      >
        <AppBox
          display="flex"
          flexDirection="column"
          justifyContent="stretch"
          width="480px"
          padding={{ base: '40px 30px', md: '40px 60px' }}
        >
          <Image
            src={logoImg}
            alt="Logo"
            width={258}
            height={70}
            margin="0 auto"
          />
          <Heading textAlign="center" size="lg" margin="40px 0 20px 0">
            Acesso ao sistema
          </Heading>

          <AppLink href="/forgot-password">
            <Button colorScheme="theme" variant="outline" isFullWidth>
              Esqueci minha senha
            </Button>
          </AppLink>
        </AppBox>
      </Flex>
      <HomeBackground image={backgroundImage} />
    </>
  );
};

export default Home;

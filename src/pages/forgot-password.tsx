import React from 'react';
import Head from 'next/head';
import { Button, Flex, Heading, Image } from '@chakra-ui/react';

import HomeBackground from '../components/HomeBackground';

import logoImg from '../assets/images/logo-light-color-mode.svg';
import backgroundImage from '../assets/images/forgot-password-background.jpg';
import AppBox from '../components/AppBox';
import AppLink from '../components/AppLink';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Forgot my password</title>
      </Head>
      <Flex
        direction="row-reverse"
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
            Recuperar senha
          </Heading>

          <AppLink href="/">
            <Button colorScheme="theme" variant="outline" isFullWidth>
              Voltar para o login
            </Button>
          </AppLink>
        </AppBox>
      </Flex>
      <HomeBackground ribbonSide="right" image={backgroundImage} />
    </>
  );
};

export default Home;

import React from 'react';
import Head from 'next/head';
import { Button, Flex, Heading, Image } from '@chakra-ui/react';

import HomeBackground from '../components/HomeBackground';

import logoImg from '../assets/images/logo-light-color-mode.svg';
import backgroundImage from '../assets/images/forgot-password-background.jpg';
import AppBox from '../components/AppBox';
import AppLink from '../components/AppLink';
import FormForgotPassword from '../components/AppForm/FormForgotPassword';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Forgot my password</title>
      </Head>
      <Flex
        direction="row-reverse"
        alignItems={{ base: 'stretch', md: 'center' }}
        width="100vw"
        height="100vh"
        padding={{ base: '20px', md: '60px' }}
        position="relative"
        overflow="hidden"
      >
        <FormForgotPassword />
      </Flex>
      <HomeBackground ribbonSide="right" image={backgroundImage} />
    </>
  );
};

export default Home;

import React from 'react';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

import { FormLogin } from '../components/AppForm';
import HomeBackground from '../components/HomeBackground';
import backgroundImage from '../assets/images/login-background.jpg';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>SignIn</title>
      </Head>
      <Flex
        direction="row"
        alignItems={{ base: 'stretch', md: 'center' }}
        width="100vw"
        height="100vh"
        padding={{ base: '20px', md: '60px' }}
        overflow="hidden"
      >
        <FormLogin />
      </Flex>
      <HomeBackground image={backgroundImage} />
    </>
  );
};

export default Home;

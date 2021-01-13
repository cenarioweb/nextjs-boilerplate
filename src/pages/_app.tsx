import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { SettingsProvider } from '../contexts/SettingsContext';

import theme from '../styles/themes/default';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Next.js Boilerplate</title>
      </Head>
      <SettingsProvider>
        <Component {...pageProps} />
      </SettingsProvider>
    </ChakraProvider>
  );
};

export default MyApp;

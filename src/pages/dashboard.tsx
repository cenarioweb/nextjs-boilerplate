import React from 'react';
import Head from 'next/head';
import { Grid, GridItem } from '@chakra-ui/react';

import { Header, Navbar, Footer } from '../components/AppLayout';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Grid
        w="100vw"
        h="100vh"
        templateRows="70px 1fr auto"
        templateColumns="auto 1fr"
        bgColor="gray.200"
      >
        <GridItem bgColor="white" colSpan={2}>
          <Header />
        </GridItem>

        <GridItem alignSelf="stretch" rowSpan={2}>
          <Navbar />
        </GridItem>

        <GridItem padding="20px 20px 20px 10px">Body</GridItem>

        <GridItem>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;

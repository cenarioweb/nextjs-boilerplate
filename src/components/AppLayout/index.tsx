import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const AppLayout: React.FC = ({ children }) => {
  return (
    <Grid
      w="100vw"
      h="100vh"
      templateRows="70px 1fr auto"
      templateColumns="auto 1fr"
      bgColor="gray.200"
    >
      <GridItem colSpan={2}>
        <Header />
      </GridItem>

      <GridItem alignSelf="stretch" rowSpan={2}>
        <Navbar />
      </GridItem>

      <GridItem padding="20px 20px 20px 10px">{children}</GridItem>

      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default AppLayout;

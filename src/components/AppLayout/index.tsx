import React from 'react';
import { Grid, GridItem, useColorModeValue } from '@chakra-ui/react';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const AppLayout: React.FC = ({ children }) => {
  const bgColor = useColorModeValue('bgLightColorMode', 'bgDarkColorMode');

  return (
    <Grid
      w="100vw"
      h="100vh"
      templateRows="70px 1fr auto"
      templateColumns="auto 1fr"
      bgColor={bgColor}
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

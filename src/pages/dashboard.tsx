import React from 'react';
import Head from 'next/head';
import { Grid, GridItem } from '@chakra-ui/react';
import AppLayout from '../components/AppLayout';
import { NextBirthdays, Welcome } from '../components/AppWidgets';

const Dashboard: React.FC = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <AppLayout>
        <Grid templateColumns="repeat(5, 1fr)" rowGap="20px" columnGap="20px">
          <GridItem colSpan={4}>
            <Welcome />
          </GridItem>

          <GridItem>
            <NextBirthdays />
          </GridItem>
        </Grid>
      </AppLayout>
    </>
  );
};

export default Dashboard;

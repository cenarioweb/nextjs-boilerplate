import React from 'react';
import Head from 'next/head';
import { Box, Flex, Grid, GridItem, IconButton } from '@chakra-ui/react';
import { FiHelpCircle, FiMaximize, FiMoreVertical } from 'react-icons/fi';
import { Form } from '@unform/web';
import AppLayout from '../components/AppLayout';
import AppBox, { BoxHeader } from '../components/AppBox';
import AppLink from '../components/AppLink';
import { InputText, Select } from '../components/AppForm';

const Forms: React.FC = () => {
  return (
    <>
      <Head>
        <title>Form elements</title>
      </Head>
      <AppLayout>
        <Grid templateColumns="repeat(2, 1fr)" rowGap="20px" columnGap="20px">
          <GridItem>
            <AppBox>
              <BoxHeader title="Modern form">
                <Flex flexDir="row" alignItems="center" margin="0 20px 0 0">
                  <AppLink href="/forms">
                    <IconButton
                      size="sm"
                      variant="ghost"
                      icon={<FiMaximize />}
                      aria-label="Maximize window"
                      color="gray.500"
                      _hover={{
                        color: 'gray.800',
                      }}
                    />
                  </AppLink>
                  <AppLink href="/forms">
                    <IconButton
                      size="sm"
                      variant="ghost"
                      icon={<FiHelpCircle />}
                      aria-label="Help"
                      color="gray.500"
                      _hover={{
                        color: 'gray.800',
                      }}
                    />
                  </AppLink>
                  <AppLink href="/forms">
                    <IconButton
                      size="sm"
                      variant="ghost"
                      icon={<FiMoreVertical />}
                      aria-label="Menu"
                      color="gray.500"
                      _hover={{
                        color: 'gray.800',
                      }}
                    />
                  </AppLink>
                </Flex>
              </BoxHeader>
              <Grid
                padding="20px"
                templateColumns="repeat(6, 1fr)"
                rowGap="10px"
                columnGap="20px"
              >
                <GridItem colSpan={4}>
                  <InputText id="f1_name" name="f1_name" label="Name" />
                </GridItem>
                <GridItem colSpan={2}>
                  <Select id="f1gender" name="f1gender" label="Gender" />
                </GridItem>
                <GridItem colSpan={3}>
                  <InputText
                    id="f1_address"
                    name="f1_address"
                    label="Address"
                  />
                </GridItem>
                <GridItem colSpan={3}>
                  <InputText id="f1_city" name="f1_city" label="City" />
                </GridItem>
              </Grid>
            </AppBox>
          </GridItem>

          <GridItem>&nbsp;</GridItem>
        </Grid>
      </AppLayout>
    </>
  );
};

export default Forms;

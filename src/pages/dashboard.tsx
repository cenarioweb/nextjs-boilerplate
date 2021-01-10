import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Dashboard: React.FC = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <AppLayout>Main Content</AppLayout>
    </>
  );
};

export default Dashboard;

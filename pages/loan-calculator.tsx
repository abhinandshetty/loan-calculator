import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Loan from '@/containers/loan';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Loan Calculator</title>
        <meta
          name="description"
          content="Simple loan calculator created using React, Tailwind and Highcharts"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Loan />
    </>
  );
};

export default Home;

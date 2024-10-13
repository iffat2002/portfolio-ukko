
import React from 'react';
import type { AppProps } from 'next/app';
import '../globals.scss'; 
import Layout from '../components/Layout'; 

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;

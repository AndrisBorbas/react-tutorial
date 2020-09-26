import Head from 'next/head';
import React from 'react';

import Navbar from './navbar/Navbar';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>schdesign TODO</title>
        <meta name="color-scheme" content="dark light" />
      </Head>

      <Navbar />

      <main className="container flex flex-col items-center flex-1 gap-4 px-4 mx-auto">
        {children}
      </main>
    </>
  );
}

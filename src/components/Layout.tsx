import Head from 'next/head';
import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>schdesign ToDo</title>
      </Head>
      <main className="container flex flex-col items-center flex-1 gap-4 px-4 mx-auto">
        {children}
      </main>
    </>
  );
}

import React, { ReactElement } from 'react';
import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = {
  title: string;
  children: ReactElement | ReactElement[];
};

export default function MainLayout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-6xl px-4 mx-auto flex-1 w-full">{children}</main>
      <Footer />
    </>
  );
}

import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Super Service</title>
        <meta name="description" content="Super Service by Devis Dumler" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* Our Work */}

      {/* About */}

      {/* Footer */}
    </>
  );
}

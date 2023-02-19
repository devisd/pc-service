import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Super Service</title>
        <meta name="description" content="Super Service by Devis Dumler" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={'/assets/hero.png'}
        width={1920}
        height={960}
        alt="hero background"
        priority
        style={{ position: 'relative' }}
      />
      <h1
        style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          textAlign: 'center',
          paddingTop: 150,
          color: 'white',
          fontSize: 60,
        }}
      >
        This is a Next.js project!
      </h1>
    </>
  );
}

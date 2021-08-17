import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';

import '@/src/styles/globals.css';
import Layout from '@/src/layout/layout';
import * as gtag from '@/src/utils/gtag';
import metaTags from '@/src/data/metaTags.json';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="author" content="Enoch Ndika" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light" />
        {metaTags.map((tag) => (
          <meta property={tag.property} content={tag.content} key={tag.id} />
        ))}
      </Head>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

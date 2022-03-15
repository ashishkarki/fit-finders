/* eslint-disable react/prop-types */

import nProgress from 'nprogress';
import '../components/styles/nprogress.css';
import Router from 'next/router';

import Page from '../components/Page';

// setup nProgress for Next.js
Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

/* eslint-disable react/jsx-props-no-spreading */
export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

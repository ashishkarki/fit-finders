/* eslint-disable react/prop-types */

import Page from '../components/Page';

/* eslint-disable react/jsx-props-no-spreading */
export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

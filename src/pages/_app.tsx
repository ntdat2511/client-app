import { AppProps } from 'next/app';
import Head from 'next/head';
// import { Provider } from 'react-redux';
// import { store } from '../state';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* <Provider store={store}> */}
      <Component {...pageProps} />
      {/* </Provider> */}
    </>
  );
};

export default MyApp;

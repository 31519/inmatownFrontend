import "../styles/globals.css";
import "../styles/nprogress.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../components/Theme";
import Error from "next/error";
// import {wrapper} from '../redux/store'
import store from "../redux/store";
import Script from "next/script";
import Router from "next/router";
import nProgress from "nprogress";

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../../lib/ga'

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // if (pageProps.error) {
  //   return (
  //     <div>
  //     <Error
  //       statusCode={pageProps.error.statusCode}
  //       title={pageProps.error.message}
  //     />
  //     <h2>Error</h2>
  //     </div>
  //   );
  // }
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-LFLDN2SY1K"
      ></Script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LFLDN2SY1K');
    `}
      </Script>

      <ThemeProvider theme={Theme}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

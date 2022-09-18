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

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
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

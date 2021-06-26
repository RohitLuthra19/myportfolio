import Head from "next/head";

import AppInfo from "../public/app.json";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
  <Head>
    <title>
      {AppInfo?.appName?.toUpperCase()}
    </title>
    <meta charSet="UTF-8" />
    <meta
      name="description"
      content="Rohit Luthra"
    />
    <meta
      name="keywords"
      content="Rohit Luthra"
    />
    <meta
      name="author"
      content={`${AppInfo.appName} || ${AppInfo.contactEmailId}`}
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Component {...pageProps} />
</>)
}

export default MyApp

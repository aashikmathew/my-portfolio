// pages/_app.js
import '../styles/globals.css';
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="./models/favicon.svg" type="image/svg+xml" />
      </Head>
      
      <Script
        src="https://www.goat1000.com/tagcanvas.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("TagCanvas loaded successfully");
          // Check if window.TagCanvas exists
          console.log("TagCanvas object available:", Boolean(window.TagCanvas));
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
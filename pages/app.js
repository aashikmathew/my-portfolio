// pages/_app.js
import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
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
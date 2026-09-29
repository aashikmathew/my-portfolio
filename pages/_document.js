import { Html, Head, Main, NextScript } from 'next/document';

// Runs before first paint so the saved/system theme applies without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default function Document() {
  return (
    <Html lang="en" data-theme="light">
      <Head>
        <meta name="theme-color" content="#f6f1e7" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#15100c" media="(prefers-color-scheme: dark)" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

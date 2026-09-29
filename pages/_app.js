import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { MotionConfig } from 'framer-motion';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const fraunces = Fraunces({ subsets: ['latin'], display: 'swap', axes: ['opsz'] });
const mono = JetBrains_Mono({ subsets: ['latin'], display: 'swap', weight: ['500', '700'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
          --font-serif: ${fraunces.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}</style>
      <MotionConfig reducedMotion="user">
        <Component {...pageProps} />
      </MotionConfig>
    </>
  );
}

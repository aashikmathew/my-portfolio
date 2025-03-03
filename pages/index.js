// pages/index.js
import React, { useState } from 'react';
import Head from 'next/head';
import Intro from '../components/Intro';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <Head>
        <title>Aashik's Portfolio</title>
        <meta
          name="description"
          content="Aashik's Portfolio: Projects, Experience & Skills"
        />
        {/* Favicon SVG */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* Optional fallback for older browsers */}
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>

      {/* Just show Intro. Once arrow is clicked, it navigates to /portfolio */}
      {showIntro && <Intro />}
    </>
  );
}

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ThreeDTechStack from '../components/PersonalTechGalaxy';
import Footer from '../components/Footer';
import BackgroundModel from '../components/BackgroundModel';

import styles from '../styles/Home.module.css';

import PersonalTechGalaxy from '../components/PersonalTechGalaxy';

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aashik's Portfolio</title>
        <meta name="description" content="My Portfolio Page with About, Projects, Contact, and Tech Stack" />
      </Head>

      <Header />
      {/* Gradient background with stars */}
      <div className={styles.gradientBackground}>
      <div className={styles.twinkle}></div>
      <div className={styles.twinkle}></div>
      <div className={styles.twinkle}></div>
      <div className={styles.twinkle}></div>
      <div className={styles.twinkle}></div>
      <div className={styles.twinkle}></div>
      <div className={styles.twinkle}></div>
      <div className={styles.twinkle}></div>
      <div className={styles.twinkle}></div>
      <div className={styles.twinkle}></div>
      <div className={styles.twinkle}></div>
      <div className={styles.twinkle}></div>
      </div>
      {/* Render the 3D background model in the corner */}
      <BackgroundModel />

      <main className={styles.mainContent}>
        <About />
        <Projects />
        <PersonalTechGalaxy />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
import React from 'react';
import styles from '../styles/About.module.css';


export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.greeting}>Hi there! <span className={styles.waveEmoji}>👋</span></h1>
        
        <p className={styles.bio}>
          I'm Aashik Mathew Prosper – a passionate problem-solver and innovative software engineer dedicated to merging cutting-edge technology with real-world solutions. With a strong foundation in full-stack development and machine learning, I've built responsive web applications, deployed advanced AI models, and conducted impactful research in healthcare and education.
        </p>
        
        <p className={styles.bio}>
          My journey spans roles as a Graduate Research Assistant, Web Developer, and CS Teaching Assistant, where I thrive on challenging projects that push my creative and technical boundaries. I'm driven by curiosity, a commitment to continuous learning, and a mission to leverage technology for meaningful change.
        </p>
        
        <div className={styles.resumeSection}>
          <a
            href="https://drive.google.com/file/d/1rPIuFQuO5zNwFd_8p0HaLAG8bSaAf97u/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeButton}
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
}
// components/FloatingIcons.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/FloatingIcons.module.css';
import {
  FaReact,
  FaPython,
  FaAws,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaRaspberryPi,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGoogle,
  FaMicrosoft,
  FaLinux,
} from 'react-icons/fa';
import { SiTensorflow, SiKubernetes, SiMongodb, SiPostgresql } from 'react-icons/si';

const TECH_ICONS = [
  <FaReact key="react" />,
  <FaPython key="python" />,
  <FaAws key="aws" />,
  <FaNodeJs key="node" />,
  <FaDocker key="docker" />,
  <FaGitAlt key="git" />,
  <FaDatabase key="db" />,
  <FaRaspberryPi key="pi" />,
  <FaJsSquare key="js" />,
  <FaHtml5 key="html" />,
  <FaCss3Alt key="css" />,
  <FaGoogle key="google" />,
  <FaMicrosoft key="microsoft" />,
  <FaLinux key="linux" />,
  <SiTensorflow key="tf" />,
  <SiKubernetes key="k8s" />,
  <SiMongodb key="mongo" />,
  <SiPostgresql key="postgres" />,
];

// Utility to randomize positions
function getRandomPosition() {
  return {
    x: Math.random() * 150 - 25,
    y: Math.random() * 150 - 25,
    scale: Math.random() * 0.5 + 0.5
  };
}

export default function FloatingIcons() {
  return (
    <div className={styles.techGrid}>
      {TECH_ICONS.map((Icon, index) => {
        const start = getRandomPosition();
        const mid = getRandomPosition();
        const end = getRandomPosition();

        return (
          <motion.div
            key={index}
            className={styles.techIcon}
            initial={{
              opacity: 0,
              x: `${start.x}vw`,
              y: `${start.y}vh`,
              scale: 0.8,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              x: [`${start.x}vw`, `${mid.x}vw`, `${end.x}vw`],
              y: [`${start.y}vh`, `${mid.y}vh`, `${end.y}vh`],
              scale: [0.8, 1.5, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 25,
              repeat: Infinity,
              ease: 'linear',
              delay: index * 0.2
            }}
          >
            {Icon}
          </motion.div>
        );
      })}
    </div>
  );
}

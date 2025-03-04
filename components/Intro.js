import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { FaChevronDown, FaReact, FaPython, FaAws, FaNodeJs, FaDocker, FaGitAlt, FaDatabase, FaRaspberryPi, FaJsSquare, FaHtml5, FaCss3Alt, FaGoogle, FaMicrosoft, FaLinux } from 'react-icons/fa';
import { SiTensorflow, SiKubernetes, SiMongodb, SiPostgresql } from 'react-icons/si';
import styles from '../styles/Intro.module.css';

export default function Intro() {
  const router = useRouter();
  const containerRef = useRef(null);

  // Array of tech icons to float in the background
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

  // Use window dimensions for responsive positioning
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Utility to randomize positions with responsiveness in mind
  const getRandomPosition = () => {
    const scale = windowSize.width < 768 ? 0.3 + Math.random() * 0.3 : 0.5 + Math.random() * 0.5;
    return { 
      x: Math.random() * 150 - 25, // in vw
      y: Math.random() * 150 - 25, // in vh
      scale: scale
    };
  };

  // Update window dimensions on resize
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Typewriter effect variables
  const fullName = "Aashik Mathew Prosper";
  const jobTitles = [
    "Software Engineer@LTIMindtree", 
    "Machine Learning Intern@Confetti", 
    "Full-Stack Dev@UIC", 
    "Graduate Research Assistant@UI Health"
  ];
  const [typedName, setTypedName] = useState("");
  const [nameComplete, setNameComplete] = useState(false);
  const [jobIndex, setJobIndex] = useState(0);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullName.length) {
        clearInterval(interval);
        setNameComplete(true);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullName]);

  useEffect(() => {
    if (!nameComplete) return;
    const interval = setInterval(() => {
      setJobIndex(prev => (prev + 1) % jobTitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [nameComplete, jobTitles.length]);

  useEffect(() => {
    if (nameComplete) {
      const timeout = setTimeout(() => {
        setShowArrow(true);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [nameComplete]);

  const navigateToPortfolio = () => {
    router.push('/portfolio');
  };

  // Listen to wheel events to navigate
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        navigateToPortfolio();
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel);
    }
    return () => container && container.removeEventListener('wheel', handleWheel);
  }, []);

  // Add touch events for mobile swipe navigation
  useEffect(() => {
    let touchStartY = 0;
    
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 50) { // Swipe up
        navigateToPortfolio();
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchend', handleTouchEnd);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  const handleArrowClick = () => {
    navigateToPortfolio();
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        className={styles.introContainer}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ 
          y: "-100vh",
          opacity: 0,
          transition: { duration: 1 }
        }}
      >
        {/* Floating tech icons */}
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
                  scale: start.scale,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  x: [`${start.x}vw`, `${mid.x}vw`, `${end.x}vw`],
                  y: [`${start.y}vh`, `${mid.y}vh`, `${end.y}vh`],
                  scale: [start.scale, start.scale * 1.2, start.scale],
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

        {/* Content overlay */}
        <div className={styles.contentOverlay}>
          <div className={styles.introContent}>
            <motion.div 
              className={styles.profilePhotoContainer}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={styles.profilePhoto}>
                <Image 
                  src="./models/profile.jpg" 
                  alt="Aashik Mathew Prosper" 
                  fill={true}
                  sizes="(max-width: 480px) 120px, (max-width: 768px) 150px, 200px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </motion.div>
            
            <motion.h1 className={styles.name}>{typedName}</motion.h1>
            {nameComplete && (
              <div className={styles.jobContainer}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={jobIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.jobTitle}
                  >
                    {jobTitles[jobIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </div>

          {showArrow && (
            <motion.div
              className={styles.arrow}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: [0, 10, 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                  }
                }
              }}
              onClick={handleArrowClick}
            >
              <FaChevronDown size={windowSize.width < 480 ? 20 : 30} color="#5c4033" />
              <div className={styles.scrollText}>Scroll Down</div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
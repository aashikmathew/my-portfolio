import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight, FiFileText, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import CountUp from './CountUp';
import { BoardOfTrade, Skyline } from './Cityscape';
import portrait from '../assets/profile.jpg';
import { certifications, profile, projects, publications } from '../data/portfolio';
import styles from '../styles/Hero.module.css';

const stats = [
  { value: certifications.length, label: 'Cloud & IaC certifications' },
  { value: publications.length, label: 'Published research papers' },
  { value: projects.length, label: 'Open-source projects' },
];

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.5 + 0.08 * i, ease } }),
};

const nameContainer = { visible: { transition: { staggerChildren: 0.035, delayChildren: 0.15 } } };
const nameLetter = {
  hidden: { y: '110%', rotate: 8 },
  visible: { y: '0%', rotate: 0, transition: { duration: 0.7, ease } },
};

function AnimatedName({ text }) {
  return (
    <motion.h1
      id="hero-heading"
      className={styles.name}
      aria-label={text}
      variants={nameContainer}
      initial="hidden"
      animate="visible"
    >
      {text.split(' ').map((word) => (
        <span key={word} className={styles.word} aria-hidden>
          {word.split('').map((char, i) => (
            <motion.span key={i} className={styles.char} variants={nameLetter}>
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 120 36" className={styles.sparkline} aria-hidden>
      <defs>
        <linearGradient id="spark-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M2 30 L14 27 L24 29 L36 21 L48 23 L60 15 L72 18 L84 10 L96 12 L108 5 L118 3 L118 36 L2 36 Z"
        fill="url(#spark-fill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      />
      <motion.path
        d="M2 30 L14 27 L24 29 L36 21 L48 23 L60 15 L72 18 L84 10 L96 12 L108 5 L118 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.1, duration: 1.4, ease }}
      />
      <motion.circle
        cx="118"
        cy="3"
        r="3"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.4, type: 'spring', stiffness: 400, damping: 15 }}
      />
    </svg>
  );
}

function Portrait() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-9, 9]), { stiffness: 150, damping: 18 });

  const onPointerMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.figure
      className={styles.portrait}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease }}
    >
      <BoardOfTrade className={styles.cbot} />
      <motion.div className={styles.tiltStage} style={{ rotateX, rotateY }}>
        <div className={styles.portraitFrame}>
          <Image
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            priority
            sizes="(max-width: 860px) 260px, 380px"
            className={styles.portraitImage}
          />
        </div>

        <motion.div
          className={styles.quoteCard}
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.7, ease }}
          aria-hidden
        >
          <div className={styles.quoteTop}>
            <span className={styles.ticker}>AMP</span>
            <span className={styles.live}>
              <span className={styles.liveDot} /> LIVE
            </span>
          </div>
          <Sparkline />
          <div className={styles.quoteBottom}>
            <span>Shipping since 2022</span>
            <span className={styles.up}>▲</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.gpaChip}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease }}
          aria-hidden
        >
          MS CS · 4.0
        </motion.div>
      </motion.div>
    </motion.figure>
  );
}

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.backdrop} aria-hidden>
        <div className={styles.orbA} />
        <div className={styles.orbB} />
      </div>
      <Skyline className={styles.skyline} />

      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <motion.p className={styles.status} variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className={styles.statusDot} aria-hidden />
            {profile.role} at{' '}
            <strong className={styles.company}>{profile.company}</strong>
          </motion.p>

          <AnimatedName text={profile.name} />

          <motion.p className={styles.headline} variants={fadeUp} initial="hidden" animate="visible" custom={1}>
            {profile.headline}
          </motion.p>

          <motion.p className={styles.tagline} variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            {profile.tagline}
          </motion.p>

          <motion.div className={styles.ctas} variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <a href="#experience" className={`btn btn-primary ${styles.primaryCta}`}>
              See my work <FiArrowRight aria-hidden className={styles.ctaArrow} />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FiFileText aria-hidden /> Resume
            </a>
          </motion.div>

          <motion.ul className={styles.socials} variants={fadeUp} initial="hidden" animate="visible" custom={4}>
            <li>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <FiGithub aria-hidden />
              </a>
            </li>
            <li>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <FiLinkedin aria-hidden />
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}>
                <FiMail aria-hidden />
              </a>
            </li>
            <li className={styles.location}>
              <FiMapPin aria-hidden /> {profile.location}
            </li>
          </motion.ul>
        </div>

        <Portrait />
      </div>

      <div className="container">
        <motion.dl className={styles.stats} variants={fadeUp} initial="hidden" animate="visible" custom={5}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt>{stat.label}</dt>
              <dd>
                <CountUp value={stat.value} decimals={stat.decimals} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

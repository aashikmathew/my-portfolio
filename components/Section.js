import { motion } from 'framer-motion';
import Reveal from './Reveal';
import styles from '../styles/Section.module.css';

const ease = [0.22, 1, 0.36, 1];
const titleContainer = { visible: { transition: { staggerChildren: 0.06 } } };
const titleWord = {
  hidden: { y: '105%' },
  visible: { y: '0%', transition: { duration: 0.75, ease } },
};

/**
 * Page section with a numbered eyebrow, a word-by-word revealing heading, and optional intro.
 * The heading id is used as the section's accessible name.
 */
export default function Section({ id, index, eyebrow, title, intro, tone = 'default', children }) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`${styles.section} ${tone === 'soft' ? styles.soft : ''}`}
    >
      <div className="container">
        <div className={styles.header}>
          <Reveal as="p" className={styles.eyebrow}>
            {index && <span className={styles.index}>{index}</span>}
            {eyebrow}
          </Reveal>
          <motion.h2
            id={headingId}
            className={styles.title}
            aria-label={title}
            variants={titleContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          >
            {title.split(' ').map((word, i) => (
              <span key={i} className={styles.word} aria-hidden>
                <motion.span className={styles.wordInner} variants={titleWord}>
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>
          {intro && (
            <Reveal as="p" delay={0.2} className={styles.intro}>
              {intro}
            </Reveal>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

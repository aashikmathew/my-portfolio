import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import Section from './Section';
import Reveal from './Reveal';
import { experiences } from '../data/portfolio';
import styles from '../styles/Experience.module.css';

const mainRoles = experiences.filter((e) => !e.earlier);
const earlierRoles = experiences.filter((e) => e.earlier);

function ExperienceItem({ exp }) {
  const isCurrent = exp.end === 'Present';
  return (
    <li className={styles.item}>
      <div className={styles.when}>
        <span>
          {exp.start} – {exp.end}
        </span>
        {isCurrent && <span className={styles.current}>Current</span>}
      </div>
      <span className={`${styles.dot} ${isCurrent ? styles.dotCurrent : ''}`} aria-hidden />
      <Reveal className={styles.body} y={14}>
        <h3 className={styles.role}>{exp.role}</h3>
        <p className={styles.meta}>
          <span className={styles.company}>{exp.company}</span>
          <span aria-hidden> · </span>
          {exp.type}
          {exp.location && (
            <>
              <span aria-hidden> · </span>
              {exp.location}
            </>
          )}
        </p>
        <ul className={styles.bullets}>
          {exp.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </Reveal>
    </li>
  );
}

export default function Experience() {
  const [showEarlier, setShowEarlier] = useState(false);
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 70%', 'end 55%'] });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Where I've worked"
      intro="From clearing and regulatory systems to research labs and enterprise engineering teams."
      tone="soft"
    >
      <div className={styles.timelineWrap}>
        <motion.span className={styles.progressLine} style={{ scaleY: lineProgress }} aria-hidden />
        <ol ref={listRef} className={styles.timeline}>
          {mainRoles.map((exp) => (
            <ExperienceItem key={exp.id} exp={exp} />
          ))}
        </ol>
      </div>

      <div className={styles.more}>
        <button
          type="button"
          className="btn btn-secondary"
          aria-expanded={showEarlier}
          aria-controls="earlier-roles"
          onClick={() => setShowEarlier((v) => !v)}
        >
          {showEarlier ? 'Hide' : 'Show'} internships &amp; community roles ({earlierRoles.length})
          <FiChevronDown aria-hidden className={`${styles.chevron} ${showEarlier ? styles.chevronUp : ''}`} />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {showEarlier && (
          <motion.ul
            id="earlier-roles"
            className={styles.earlierGrid}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {earlierRoles.map((exp, i) => (
              <motion.li
                key={exp.id}
                className={styles.earlierCard}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.1 }}
              >
                <p className={styles.earlierWhen}>
                  {exp.start} – {exp.end} · {exp.type}
                </p>
                <h3 className={styles.earlierRole}>{exp.role}</h3>
                <p className={styles.earlierCompany}>{exp.company}</p>
                <p className={styles.earlierText}>{exp.bullets[0]}</p>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </Section>
  );
}

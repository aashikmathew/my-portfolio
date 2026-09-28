import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiChevronDown, FiGithub } from 'react-icons/fi';
import Section from './Section';
import Reveal from './Reveal';
import { publications } from '../data/portfolio';
import styles from '../styles/Publications.module.css';

function Publication({ pub, index }) {
  const [open, setOpen] = useState(false);
  const panelId = `${pub.id}-highlights`;

  return (
    <Reveal as="li" delay={index * 0.06} className={styles.item}>
      <div className={styles.meta}>
        <span className={pub.status === 'Published' ? styles.published : styles.review}>{pub.status}</span>
        <span>{pub.venue}</span>
        <span aria-hidden>·</span>
        <span>{pub.date}</span>
      </div>

      <h3 className={styles.title}>{pub.title}</h3>
      {pub.authors && <p className={styles.authors}>{pub.authors}</p>}

      <div className={styles.actions}>
        <a href={pub.link} target="_blank" rel="noopener noreferrer" className={styles.action}>
          Read paper <FiArrowUpRight aria-hidden />
        </a>
        {pub.code && (
          <a href={pub.code} target="_blank" rel="noopener noreferrer" className={styles.action}>
            <FiGithub aria-hidden /> Code
          </a>
        )}
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Hide highlights' : 'Key highlights'}
          <FiChevronDown aria-hidden className={`${styles.chevron} ${open ? styles.chevronUp : ''}`} />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={styles.panel}
          >
            <ul className={styles.highlights}>
              {pub.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}

export default function Publications() {
  return (
    <Section
      id="research"
      index="04"
      eyebrow="Research"
      title="Publications"
      intro="Applied machine learning research in medical imaging, agriculture, and traffic safety."
      tone="soft"
    >
      <ol className={styles.list}>
        {publications.map((pub, i) => (
          <Publication key={pub.id} pub={pub} index={i} />
        ))}
      </ol>
    </Section>
  );
}

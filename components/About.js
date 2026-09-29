import { FiArrowUpRight } from 'react-icons/fi';
import Section from './Section';
import Reveal from './Reveal';
import { certifications, currentRole, education } from '../data/portfolio';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="I build software where being wrong is expensive.">
      <div className={styles.grid}>
        <Reveal className={styles.bio}>
          <p className={styles.lead}>
            At Phillip Capital, a Chicago clearing firm, I work on the systems that process, margin, and report
            futures and options trades.
          </p>
          <p>
            Before that, I built computer vision models for orthopaedic research and full-stack tools at the
            University of Illinois Chicago, where I earned my MS in Computer Science.
          </p>
          <p>Research taught me to question every number. Finance taught me to make sure it&apos;s right by market close.</p>
        </Reveal>

        <Reveal as="aside" delay={0.1} className={styles.card} aria-label="At a glance">
          <div className={styles.block}>
            <h3 className={styles.cardTitle}>Currently</h3>
            <p className={styles.itemTitle}>{currentRole.title}</p>
            <a href={currentRole.link} target="_blank" rel="noopener noreferrer" className={styles.itemLink}>
              {currentRole.org}
              <FiArrowUpRight aria-hidden />
            </a>
            <p className={styles.itemMeta}>{currentRole.detail}</p>
          </div>

          <div className={styles.block}>
            <h3 className={styles.cardTitle}>Education</h3>
            <ul className={styles.list}>
              {education.map((e) => (
                <li key={e.school}>
                  <p className={styles.itemTitle}>{e.degree}</p>
                  <p className={styles.itemMeta}>
                    {e.school} · {e.years} · GPA {e.gpa}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <h3 className={styles.cardTitle}>Certified</h3>
            <ul className={styles.list}>
              {certifications.map((c) => (
                <li key={c.name}>
                  <p className={styles.itemTitle}>{c.name}</p>
                  <p className={styles.itemMeta}>
                    {c.issuer} · {c.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

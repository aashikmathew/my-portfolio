import { useEffect, useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Reveal from './Reveal';
import { profile } from '../data/portfolio';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch (e) {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className={styles.section}>
      <div className="container">
        <Reveal className={styles.card}>
          <p className={styles.eyebrow}>
            <span className={styles.index}>06</span>Contact
          </p>
          <h2 id="contact-heading" className={styles.title}>
            Let&apos;s talk shop.
          </h2>
          <p className={styles.text}>
            Trading systems, data pipelines, machine learning, or an idea you want a second pair of eyes on. My
            inbox is open.
          </p>

          <div className={styles.emailRow}>
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <FiMail aria-hidden /> {profile.email}
            </a>
            <button type="button" className="btn btn-secondary" onClick={copyEmail}>
              {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
            <span className="visually-hidden" role="status">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </div>

          <ul className={styles.socials}>
            <li>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <FiLinkedin aria-hidden /> LinkedIn <FiArrowUpRight aria-hidden className={styles.arrow} />
              </a>
            </li>
            <li>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
                <FiGithub aria-hidden /> GitHub <FiArrowUpRight aria-hidden className={styles.arrow} />
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

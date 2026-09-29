import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import Section from './Section';
import Reveal from './Reveal';
import { trackPointer } from './spotlight';
import { projectAreas, projects } from '../data/portfolio';
import styles from '../styles/Projects.module.css';

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);
const ALL = 'All';

function ProjectLinks({ project }) {
  return (
    <div className={styles.links}>
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
          Live demo <FiArrowUpRight aria-hidden />
          <span className="visually-hidden"> for {project.title}</span>
        </a>
      )}
      <a href={project.repo} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
        <FiGithub aria-hidden /> Code
        <span className="visually-hidden"> for {project.title} on GitHub</span>
      </a>
    </div>
  );
}

function Tags({ tags, max }) {
  const shown = max ? tags.slice(0, max) : tags;
  return (
    <ul className={styles.tags} aria-label="Technologies">
      {shown.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

function FeaturedCard({ project, index }) {
  return (
    <Reveal
      as="article"
      delay={index * 0.06}
      className={`spotlight ${styles.featuredCard}`}
      onPointerMove={trackPointer}
    >
      <div className={styles.featuredTop}>
        <span className={styles.featuredIndex}>{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.areas}>{project.areas.join(' · ')}</span>
      </div>
      <h3 className={styles.featuredTitle}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <Tags tags={project.tags} />
      <ProjectLinks project={project} />
    </Reveal>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25 }}
      className={`spotlight ${styles.card}`}
      onPointerMove={trackPointer}
    >
      <div className={styles.cardTop}>
        <span className={styles.year}>{project.year}</span>
        {project.fork && <span className={styles.fork}>Fork</span>}
      </div>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDescription}>{project.description}</p>
      <Tags tags={project.tags} max={4} />
      <ProjectLinks project={project} />
    </motion.article>
  );
}

export default function Projects() {
  const [area, setArea] = useState(ALL);

  const filtered = useMemo(
    () => (area === ALL ? others : others.filter((p) => p.areas.includes(area))),
    [area]
  );

  const counts = useMemo(() => {
    const result = { [ALL]: others.length };
    projectAreas.forEach((a) => {
      result[a] = others.filter((p) => p.areas.includes(a)).length;
    });
    return result;
  }, []);

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Selected work"
      intro="Data platforms, distributed systems, LLM tooling, and medical imaging. All open source."
    >
      <div className={styles.featuredGrid}>
        {featured.map((project, i) => (
          <FeaturedCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className={styles.moreHeader}>
        <h3 className={styles.moreTitle}>More projects</h3>
        <div className={styles.filters} role="group" aria-label="Filter projects by area">
          {[ALL, ...projectAreas].map((a) => (
            <button
              key={a}
              type="button"
              className={styles.filter}
              aria-pressed={area === a}
              onClick={() => setArea(a)}
            >
              {a}
              <span className={styles.filterCount}>{counts[a]}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="visually-hidden" aria-live="polite">
        Showing {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
        {area !== ALL ? ` in ${area}` : ''}
      </p>

      <motion.div layout className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

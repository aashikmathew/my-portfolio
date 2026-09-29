import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiX } from 'react-icons/fi';
import Section from './Section';
import Reveal from './Reveal';
import { trackPointer } from './spotlight';
import { evidenceFor, skillGroups } from '../data/portfolio';
import styles from '../styles/Skills.module.css';

const allSkills = skillGroups.flatMap((group) =>
  group.skills.map((skill) => {
    const evidence = evidenceFor(skill);
    return {
      ...skill,
      group: group.label,
      evidence,
      count: evidence.projects.length + evidence.roles.length,
    };
  })
);

const skillsByGroup = skillGroups.map((group) => ({
  ...group,
  skills: allSkills.filter((s) => s.group === group.label),
}));

function plural(n, word) {
  return `${n} ${word}${n === 1 ? '' : 's'}`;
}

function EvidencePanel({ skill, onClose }) {
  if (!skill) {
    return (
      <div className={styles.placeholder}>
        <p className={styles.placeholderTitle}>Pick a skill</p>
        <p>
          Select any skill to see the projects and roles on this page where I&apos;ve put it to work. Numbers on
          each skill show how many there are.
        </p>
      </div>
    );
  }

  const { projects, roles } = skill.evidence;

  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className={styles.panelHeader}>
        <div>
          <p className={styles.panelGroup}>{skill.group}</p>
          <h3 id="skill-panel-title" className={styles.panelTitle}>
            {skill.name}
          </h3>
        </div>
        <button type="button" className={`btn btn-ghost btn-icon ${styles.close}`} onClick={onClose} aria-label="Close details">
          <FiX size={18} aria-hidden />
        </button>
      </div>

      {skill.count === 0 ? (
        <p className={styles.empty}>
          Part of my toolkit, but not showcased in a project on this page yet. Ask me about it!
        </p>
      ) : (
        <>
          <p className={styles.summary}>
            Used in {[projects.length && plural(projects.length, 'project'), roles.length && plural(roles.length, 'role')]
              .filter(Boolean)
              .join(' and ')}
            .
          </p>

          {projects.length > 0 && (
            <div className={styles.evidenceGroup}>
              <h4 className={styles.evidenceLabel}>Projects</h4>
              <ul className={styles.evidenceList}>
                {projects.map((p) => (
                  <li key={p.id}>
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className={styles.evidenceLink}>
                      <span>{p.title}</span>
                      <FiArrowUpRight aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {roles.length > 0 && (
            <div className={styles.evidenceGroup}>
              <h4 className={styles.evidenceLabel}>Roles</h4>
              <ul className={styles.evidenceList}>
                {roles.map((r) => (
                  <li key={r.id} className={styles.roleItem}>
                    <span className={styles.roleName}>{r.role}</span>
                    <span className={styles.roleCompany}>
                      {r.company} · {r.start} – {r.end}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}

export default function Skills() {
  const [selectedName, setSelectedName] = useState(null);
  const layoutRef = useRef(null);
  const selected = useMemo(() => allSkills.find((s) => s.name === selectedName) || null, [selectedName]);

  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = (e) => e.key === 'Escape' && setSelectedName(null);
    // The mobile bottom sheet should not follow the reader out of this section.
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) setSelectedName(null);
    });
    observer.observe(layoutRef.current);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      observer.disconnect();
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [selected]);

  return (
    <Section
      id="skills"
      index="05"
      eyebrow="Skills"
      title="Toolbox, with receipts"
      intro="No made-up percentages. Pick any skill to see exactly where I've used it."
    >
      <div ref={layoutRef} className={styles.layout}>
        <div className={styles.groups}>
          <p className={styles.legend}>
            <span className={styles.legendCore} aria-hidden /> Everyday tools
            <span className={styles.legendCount} aria-hidden>
              3
            </span>
            Projects &amp; roles that use it
          </p>

          {skillsByGroup.map((group, gi) => (
            <Reveal
              key={group.id}
              delay={gi * 0.04}
              className={`spotlight ${styles.group}`}
              onPointerMove={trackPointer}
            >
              <h3 className={styles.groupTitle} id={`skills-${group.id}`}>
                {group.label}
              </h3>
              <ul className={styles.chips} aria-labelledby={`skills-${group.id}`}>
                {group.skills.map((skill) => {
                  const isSelected = selectedName === skill.name;
                  return (
                    <li key={skill.name}>
                      <button
                        type="button"
                        className={`${styles.chip} ${skill.core ? styles.chipCore : ''}`}
                        aria-pressed={isSelected}
                        aria-controls="skill-panel"
                        onClick={() => setSelectedName(isSelected ? null : skill.name)}
                      >
                        {skill.name}
                        {skill.core && <span className="visually-hidden">, everyday tool</span>}
                        {skill.count > 0 && (
                          <>
                            <span className={styles.count} aria-hidden>
                              {skill.count}
                            </span>
                            <span className="visually-hidden">, used in {skill.count} places</span>
                          </>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>

        <aside
          id="skill-panel"
          aria-label="Skill details"
          className={`${styles.panel} ${selected ? styles.panelOpen : ''}`}
        >
          <AnimatePresence mode="wait">
            <EvidencePanel skill={selected} onClose={() => setSelectedName(null)} />
          </AnimatePresence>
        </aside>
      </div>

      <p className="visually-hidden" aria-live="polite">
        {selected
          ? `${selected.name}: ${selected.count === 0 ? 'no linked projects yet' : `used in ${selected.count} places`}. Details shown in the skill details panel.`
          : ''}
      </p>
    </Section>
  );
}

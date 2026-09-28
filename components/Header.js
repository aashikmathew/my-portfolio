import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { navItems, profile } from '../data/portfolio';
import styles from '../styles/Header.module.css';

function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navItems.map((item) => item.id);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const active = useActiveSection(sectionIds);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const closeOnDesktop = () => window.innerWidth > 860 && setMenuOpen(false);
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <a href="#top" className={styles.brand} onClick={closeMenu} aria-label={`${profile.name}, back to top`}>
            <Logo size={36} />
            <span className={styles.brandName}>{profile.name}</span>
          </a>

          <nav aria-label="Primary" className={styles.desktopNav}>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={styles.navLink}
                    aria-current={active === item.id ? 'true' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <ThemeToggle />
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-secondary ${styles.resume}`}
            >
              Resume
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              className={`btn btn-ghost btn-icon ${styles.menuButton}`}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <FiX size={20} aria-hidden /> : <FiMenu size={20} aria-hidden />}
            </button>
          </div>
        </div>
        <motion.div className={styles.progress} style={{ scaleX: progress }} aria-hidden />
      </header>

      {/* Outside <header>: its backdrop-filter would otherwise trap this fixed overlay. */}
      <nav id="mobile-menu" aria-label="Mobile" className={styles.mobileNav} hidden={!menuOpen}>
        <ul className="container">
          {navItems.map((item, i) => (
            <li key={item.id} style={{ '--i': i }}>
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                aria-current={active === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li style={{ '--i': navItems.length }}>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              Resume ↗
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

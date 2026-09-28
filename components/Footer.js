import { FiArrowUp } from 'react-icons/fi';
import { profile } from '../data/portfolio';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className={styles.top}>
          Back to top <FiArrowUp aria-hidden />
        </a>
      </div>
    </footer>
  );
}

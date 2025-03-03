import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Aashik Mathew. All rights reserved.</p>
    </footer>
  );
}
import styles from '../styles/Logo.module.css';

/** "A" monogram whose crossbar is a rising price line ending in a live dot. */
export default function Logo({ size = 36, className = '' }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={`${styles.logo} ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="40" height="40" rx="11" className={styles.tile} />
      <path d="M10.5 30 L20 9.5 L29.5 30" className={styles.letter} />
      <path d="M12 24.5 L16 21 L19.5 23.5 L27.5 16" pathLength="1" className={styles.chart} />
      <circle cx="30" cy="13.8" r="2.4" className={styles.dot} />
    </svg>
  );
}

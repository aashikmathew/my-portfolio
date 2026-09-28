import { tickerItems } from '../data/portfolio';
import styles from '../styles/Ticker.module.css';

function Row() {
  return (
    <ul className={styles.row}>
      {tickerItems.map((item) => (
        <li key={item.label} className={styles.item}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.delta}>{item.delta}</span>
        </li>
      ))}
    </ul>
  );
}

/** Decorative market-tape marquee; everything in it is stated elsewhere on the page. */
export default function Ticker() {
  return (
    <div className={styles.tape} aria-hidden>
      <div className={styles.track}>
        <Row />
        <Row />
      </div>
    </div>
  );
}

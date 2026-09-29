import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../styles/Cityscape.module.css';

// Deterministic pseudo-random so server and client render identical markup.
function rand(seed) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function piers(x0, x1, y0, y1, step) {
  let d = '';
  for (let x = x0 + step; x < x1 - 1; x += step) d += `M${x} ${y0}V${y1}`;
  return d;
}

function windowGrid(x0, x1, y0, y1, colStep, rowStep, seedOffset, litRatio) {
  const cells = [];
  let i = 0;
  for (let y = y0; y + rowStep * 0.55 <= y1; y += rowStep) {
    for (let x = x0 + colStep * 0.29; x + colStep * 0.42 <= x1; x += colStep) {
      const r = rand(seedOffset + i);
      cells.push({
        x,
        y,
        w: colStep * 0.42,
        h: rowStep * 0.55,
        lit: r < litRatio,
        delay: 2 + rand(seedOffset + i + 500) * 6,
        duration: 4 + rand(seedOffset + i + 900) * 8,
      });
      i += 1;
    }
  }
  return cells;
}

/* ---------- Chicago Board of Trade tower (viewBox 600 × 860) ---------- */

const CBOT_OUTLINE =
  'M40 860V600H90V540H150V380H185V190H215V160L300 70L385 160V190H415V380H450V540H510V600H560V860';
const CBOT_BANDS = 'M90 600H510M150 540H450M185 380H415M215 190H385M215 160H385';
const CBOT_PIERS =
  piers(185, 415, 190, 380, 23) + piers(150, 450, 380, 540, 25) + piers(90, 510, 540, 600, 28) + piers(40, 560, 600, 860, 26);
const CBOT_ROOF = 'M238 136H362M261 112H339M283 89H317M300 70V160';
const CERES = 'M297 70L295.5 52Q300 46 304.5 52L303 70Z';

const CBOT_WINDOWS = [
  ...windowGrid(185, 415, 197, 378, 23, 15, 1, 0.38),
  ...windowGrid(150, 450, 388, 538, 25, 16, 300, 0.3),
  ...windowGrid(90, 510, 548, 598, 28, 14, 700, 0.25),
  ...windowGrid(40, 560, 612, 858, 26, 18, 1000, 0.18),
];

const ease = [0.22, 1, 0.36, 1];
const draw = (delay, duration = 1.8) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: { pathLength: { delay, duration, ease }, opacity: { delay, duration: 0.2 } },
});

function Windows({ cells }) {
  return cells.map((c, i) => (
    <rect
      key={i}
      x={c.x}
      y={c.y}
      width={c.w}
      height={c.h}
      className={c.lit ? styles.windowLit : styles.window}
      style={c.lit ? { animationDelay: `${c.delay}s`, animationDuration: `${c.duration}s` } : undefined}
    />
  ));
}

/** Line illustration of the Chicago Board of Trade Building that draws itself in. */
export function BoardOfTrade({ className = '' }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 110]);

  return (
    <motion.div className={`${styles.cbot} ${className}`} style={{ y }} aria-hidden>
      <svg viewBox="0 0 600 860" preserveAspectRatio="xMidYMax meet">
        <defs>
          <radialGradient id="ceres-glow">
            <stop offset="0%" stopColor="var(--glow)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--glow)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="300" cy="52" r="34" fill="url(#ceres-glow)" className={styles.glow} />

        <motion.path
          d={CBOT_OUTLINE + 'Z'}
          className={styles.fill}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1.2 }}
        />
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <Windows cells={CBOT_WINDOWS} />
        </motion.g>

        <motion.path d={CBOT_PIERS} className={styles.fine} {...draw(0.9, 2)} />
        <motion.path d={CBOT_BANDS} className={styles.line} {...draw(0.7)} />
        <motion.path d={CBOT_ROOF} className={styles.fine} {...draw(1.2, 1.2)} />
        <motion.path d={CBOT_OUTLINE} className={styles.outline} {...draw(0.2, 2.2)} />

        <motion.g
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8, ease }}
        >
          <path d={CERES} className={styles.statue} />
          <circle cx="300" cy="43" r="3" className={styles.statue} />
          <path d="M304 53L309.5 44.5" className={styles.outline} />
        </motion.g>
      </svg>
    </motion.div>
  );
}

/* ---------- Surrounding Loop skyline (viewBox 1440 × 240) ---------- */

const SKYLINE = (() => {
  const buildings = [];
  let x = -10;
  let i = 0;
  while (x < 1450) {
    const w = 38 + Math.round(rand(i + 40) * 70);
    const h = 60 + Math.round(rand(i + 80) * 170);
    buildings.push({ x, w, h, seed: 2000 + i * 60 });
    x += w + 4 + Math.round(rand(i + 120) * 10);
    i += 1;
  }
  return buildings;
})();

export function Skyline({ className = '' }) {
  return (
    <div className={`${styles.skyline} ${className}`} aria-hidden>
      <svg viewBox="0 0 1440 240" preserveAspectRatio="xMidYMax slice">
        {SKYLINE.map((b, i) => {
          const top = 240 - b.h;
          return (
            <motion.g
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.035, duration: 0.9, ease }}
            >
              <rect x={b.x} y={top} width={b.w} height={b.h} className={styles.tower} />
              <Windows cells={windowGrid(b.x + 4, b.x + b.w - 4, top + 8, 236, 10, 12, b.seed, 0.08)} />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

/** Counts from 0 to `value` the first time it scrolls into view. */
export default function CountUp({ value, decimals = 0, duration = 1.4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!inView) return undefined;
    if (reduceMotion) {
      setDisplay(value.toFixed(decimals));
      return undefined;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, decimals, duration]);

  return (
    <span ref={ref}>
      <span aria-hidden>{display}</span>
      <span className="visually-hidden">{value.toFixed(decimals)}</span>
    </span>
  );
}

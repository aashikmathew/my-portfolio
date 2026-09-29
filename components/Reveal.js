import { motion } from 'framer-motion';

/** Fades and lifts its children into view once. Honors reduced-motion via MotionConfig. */
export default function Reveal({ as = 'div', delay = 0, y = 16, className, children, ...rest }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}

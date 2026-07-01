import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

/**
 * FadeIn
 *
 * Minimal Framer Motion wrapper — placeholder for future scroll/entry
 * animations. Kept intentionally simple; richer motion choreography
 * belongs to the homepage/design implementation pass.
 *
 * Usage:
 *   <FadeIn client:visible><Section /></FadeIn>
 */
interface FadeInProps {
  delay?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  className,
}: PropsWithChildren<FadeInProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

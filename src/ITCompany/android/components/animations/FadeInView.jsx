import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';

export function FadeInView({ children, delay = 0 }) {
  const { ref, controls } = useAnimateOnScroll();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.43, 0.13, 0.23, 0.96]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
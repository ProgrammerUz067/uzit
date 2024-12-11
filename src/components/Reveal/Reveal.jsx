import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
export default function Reveal({ children, delay, width = '100%' }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}>
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn', delay }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: '#6b8c49',
          zIndex: 20,
        }}
      />
    </div>
  );
}

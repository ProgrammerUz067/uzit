import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
export default function TextUp({ children, width, delay }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
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
    </div>
  );
}

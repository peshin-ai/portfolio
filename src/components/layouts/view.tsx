import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ViewProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

/**
 * View component animates its children when they enter the viewport.
 * Uses framer-motion and Intersection Observer (via useInView).
 */
const View: React.FC<ViewProps> = ({
  children,
  className = "",
  threshold = 0.2,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
    amount: threshold,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default View;

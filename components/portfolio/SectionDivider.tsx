"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type SectionDividerProps = {
  label?: string;
  id?: string;
};

const SectionDivider = ({ label, id }: SectionDividerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} id={id} className="relative py-4">
      <div className="flex items-center gap-6 px-6 lg:px-10 max-w-350 mx-auto">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 h-px bg-border origin-left"
        />

        {label && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground uppercase shrink-0"
          >
            {label}
          </motion.span>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          className="flex-1 h-px bg-border origin-right"
        />
      </div>
    </div>
  );
};

export default SectionDivider;
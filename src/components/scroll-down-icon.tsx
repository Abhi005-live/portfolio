"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ScrollDownIcon = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handler = () => setShow(window.scrollY <= 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-1"
        >
          {[0, 1, 2].map((i) => (
            <motion.svg
              key={i}
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
            >
              <polyline
                points="1,1 9,9 17,1"
                stroke="url(#chevron-grad)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="chevron-grad" x1="0" y1="0" x2="18" y2="0">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </motion.svg>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollDownIcon;

"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePreloader } from ".";

const BOOT_LINES = [
  "> Initializing portfolio runtime...",
  "> Loading assets & 3D engine...",
  "> Mounting experience modules...",
  "> Calibrating keyboard physics...",
  "> Spawning interactive elements...",
  "> All systems nominal. Launching...",
];

export default function Loader() {
  const { loadingPercent } = usePreloader();
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [glitch, setGlitch] = useState(false);
  const lineIndex = useRef(0);

  // Drip boot lines in over time
  useEffect(() => {
    const interval = setInterval(() => {
      if (lineIndex.current < BOOT_LINES.length) {
        setVisibleLines((prev) => [...prev, BOOT_LINES[lineIndex.current]]);
        lineIndex.current++;
      } else {
        clearInterval(interval);
      }
    }, 380);
    return () => clearInterval(interval);
  }, []);

  // Random glitch flashes
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 120);
    }, 2200);
    return () => clearInterval(glitchInterval);
  }, []);

  const pct = Math.min(Math.round(loadingPercent), 100);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#050508" }}
    >
      {/* Scanlines overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)",
          zIndex: 10,
        }}
      />

      {/* Radial glow behind content */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,92,246,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-20 flex flex-col items-center w-full max-w-lg px-6 gap-8">
        {/* Title with glitch */}
        <div className="relative select-none">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-[0.2em] uppercase"
            style={{
              fontFamily: "monospace",
              color: glitch ? "#ec4899" : "#a78bfa",
              textShadow: glitch
                ? "3px 0 #ec4899, -3px 0 #22d3ee"
                : "0 0 30px rgba(167,139,250,0.7), 0 0 60px rgba(167,139,250,0.3)",
              transition: "color 0.05s, text-shadow 0.05s",
            }}
          >
            ABHINANDAN
          </h1>
          {/* Glitch clone */}
          {glitch && (
            <h1
              className="absolute inset-0 text-4xl md:text-5xl font-bold tracking-[0.2em] uppercase pointer-events-none"
              style={{
                fontFamily: "monospace",
                color: "#22d3ee",
                clipPath: "inset(30% 0 40% 0)",
                transform: "translateX(-4px)",
                opacity: 0.7,
              }}
            >
              ABHINANDAN
            </h1>
          )}
        </div>

        {/* XP / Level bar */}
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "#6d28d9", fontFamily: "monospace" }}
            >
              LOADING EXPERIENCE
            </span>
            <span
              className="text-sm font-bold tabular-nums"
              style={{
                fontFamily: "monospace",
                color: "#a78bfa",
                textShadow: "0 0 10px rgba(167,139,250,0.8)",
              }}
            >
              {pct}%
            </span>
          </div>

          {/* Track */}
          <div
            className="relative w-full h-3 rounded-full overflow-hidden"
            style={{
              background: "rgba(109,40,217,0.15)",
              border: "1px solid rgba(109,40,217,0.4)",
              boxShadow: "0 0 12px rgba(109,40,217,0.2)",
            }}
          >
            {/* Fill */}
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                width: `${pct}%`,
                background:
                  "linear-gradient(90deg, #7c3aed, #a855f7, #ec4899)",
                boxShadow:
                  "0 0 16px rgba(168,85,247,0.8), 0 0 32px rgba(168,85,247,0.4)",
              }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
            {/* Shimmer sweep */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                animation: "shimmer 1.6s linear infinite",
              }}
            />
          </div>

          {/* Tick marks */}
          <div className="flex justify-between px-0.5">
            {[0, 25, 50, 75, 100].map((tick) => (
              <span
                key={tick}
                className="text-[10px]"
                style={{
                  fontFamily: "monospace",
                  color: pct >= tick ? "#7c3aed" : "#2d1b69",
                }}
              >
                {tick}
              </span>
            ))}
          </div>
        </div>

        {/* Boot log terminal */}
        <div
          className="w-full rounded-lg p-4 font-mono text-xs leading-6 min-h-[160px]"
          style={{
            background: "rgba(10,5,30,0.8)",
            border: "1px solid rgba(109,40,217,0.3)",
            boxShadow: "inset 0 0 20px rgba(109,40,217,0.05)",
          }}
        >
          <AnimatePresence>
            {visibleLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  color:
                    i === visibleLines.length - 1 ? "#a78bfa" : "#4c1d95",
                }}
              >
                {line}
                {i === visibleLines.length - 1 && (
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "13px",
                      background: "#a78bfa",
                      marginLeft: "4px",
                      verticalAlign: "middle",
                      animation: "blink 1s step-end infinite",
                    }}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
}

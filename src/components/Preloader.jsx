import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

const preparationSteps = [
  "Curating slow evenings...",
  "Plating modern artistry...",
  "Steaming fresh shumai...",
  "Chilling signature glasses...",
  "Ready to linger."
];

export default function Preloader() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    // Cycle through preparation steps
    const stepInterval = setInterval(() => {
      setStepIndex((prev) => (prev < preparationSteps.length - 1 ? prev + 1 : prev));
    }, 600);

    return () => clearInterval(stepInterval);
  }, []);

  return (
    <motion.div 
      className="preloader-overlay"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="preloader-content">
        {/* Animated Restaurant SVG - Plate, Bowl, Chopsticks, Steam */}
        <div className="preloader-svg-wrapper">
          <svg viewBox="0 0 100 100" className="preloader-svg">
            {/* Plates Drawing */}
            <motion.circle 
              cx="50" 
              cy="68" 
              r="22" 
              stroke="var(--gold-thread)" 
              strokeWidth="1.2" 
              fill="none" 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <motion.circle 
              cx="50" 
              cy="68" 
              r="17" 
              stroke="rgba(163, 126, 44, 0.3)" 
              strokeWidth="0.8" 
              fill="none" 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            />

            {/* Steaming Bowl */}
            <motion.path 
              d="M34,62 C34,74 66,74 66,62 Z" 
              stroke="#EDEAE4" 
              strokeWidth="1.5" 
              fill="none" 
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            />

            {/* Animated Rising Steam (Looping) */}
            <motion.path 
              d="M45,52 C43,44 47,40 45,34" 
              stroke="#EDEAE4" 
              strokeWidth="1.2" 
              strokeLinecap="round" 
              fill="none" 
              initial={{ pathLength: 0, opacity: 0, y: 5 }}
              animate={{ 
                pathLength: [0, 1, 1],
                opacity: [0, 0.8, 0],
                y: [5, -10]
              }}
              transition={{ 
                duration: 1.6, 
                repeat: Infinity, 
                ease: "linear",
                delay: 0.5 
              }}
            />
            <motion.path 
              d="M50,50 C48,42 52,38 50,32" 
              stroke="#EDEAE4" 
              strokeWidth="1.2" 
              strokeLinecap="round" 
              fill="none" 
              initial={{ pathLength: 0, opacity: 0, y: 5 }}
              animate={{ 
                pathLength: [0, 1, 1],
                opacity: [0, 0.8, 0],
                y: [5, -10]
              }}
              transition={{ 
                duration: 1.6, 
                repeat: Infinity, 
                ease: "linear",
                delay: 0.9 
              }}
            />
            <motion.path 
              d="M55,52 C53,44 57,40 55,34" 
              stroke="#EDEAE4" 
              strokeWidth="1.2" 
              strokeLinecap="round" 
              fill="none" 
              initial={{ pathLength: 0, opacity: 0, y: 5 }}
              animate={{ 
                pathLength: [0, 1, 1],
                opacity: [0, 0.8, 0],
                y: [5, -10]
              }}
              transition={{ 
                duration: 1.6, 
                repeat: Infinity, 
                ease: "linear",
                delay: 0.7 
              }}
            />

            {/* Chopsticks Hover/Tilt Animation */}
            <motion.g
              initial={{ opacity: 0, x: -10, y: -10 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: 0,
                rotate: [0, -2, 0]
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                x: { duration: 0.8, delay: 0.6 },
                y: { duration: 0.8, delay: 0.6 },
                rotate: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ originX: "68px", originY: "58px" }}
            >
              {/* Chopstick 1 */}
              <line x1="28" y1="28" x2="68" y2="58" stroke="var(--gold-thread)" strokeWidth="1.5" strokeLinecap="round" />
              {/* Chopstick 2 */}
              <line x1="33" y1="24" x2="71" y2="55" stroke="var(--gold-thread)" strokeWidth="1.5" strokeLinecap="round" />
            </motion.g>
          </svg>
        </div>

        {/* Brand Monogram & Loading Title */}
        <motion.h1 
          className="preloader-title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AYAME
        </motion.h1>

        {/* Dynamic Status Text */}
        <div className="preloader-status-container">
          <motion.p 
            key={stepIndex}
            className="preloader-status"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 0.75, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {preparationSteps[stepIndex]}
          </motion.p>
        </div>

        {/* Thin Gold Progress Bar */}
        <div className="preloader-progress-track">
          <motion.div 
            className="preloader-progress-bar"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.6, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const duration = 2500;
    const interval = 30;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShow(false);
            setTimeout(() => onComplete?.(), 400);
          }, 300);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "linear-gradient(135deg, #081D42 0%, #0B2148 40%, #0D2A55 100%)" }}
        >
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(200,155,60,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,155,60,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Soft radial glow behind logo — no box */}
          <div
            className="absolute"
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(200,155,60,0.08) 0%, rgba(200,155,60,0.03) 40%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -55%)",
              pointerEvents: "none",
            }}
          />

          {/* Logo Container — no visible box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8"
          >
            {/* Logo with subtle float */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/logo.png"
                alt="IREAD ALPHA"
                className="w-24 h-24 md:w-28 md:h-28 object-contain"
                style={{ filter: "drop-shadow(0 4px 20px rgba(200,155,60,0.2))" }}
              />
            </motion.div>
          </motion.div>

          {/* School Name */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1
              className="text-white text-2xl md:text-3xl font-bold tracking-wide"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              IREAD ALPHA
            </h1>
            <p className="text-white/50 text-xs md:text-sm tracking-[4px] mt-2 uppercase">
              English Medium High School
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="w-48 md:w-56"
          >
            <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-[width] duration-75 ease-linear"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #C89B3C, #D4AD5A, #C89B3C)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.5s linear infinite",
                }}
              />
            </div>

            <div className="flex justify-between mt-3">
              <span className="text-white/30 text-[10px] tracking-widest uppercase">
                Loading
              </span>
              <span className="text-[#C89B3C]/70 text-[10px] font-medium">
                {Math.round(progress)}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

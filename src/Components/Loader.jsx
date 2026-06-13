import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => onComplete?.(), 200);
    }, 1000);

    return () => clearTimeout(timer);
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

          {/* Outer glow ring 3 — largest, slowest */}
          <motion.div
            className="absolute"
            style={{
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              border: "1px solid rgba(200,155,60,0.06)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -55%)",
              pointerEvents: "none",
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.08, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Outer glow ring 2 */}
          <motion.div
            className="absolute"
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              border: "1px solid rgba(200,155,60,0.1)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -55%)",
              pointerEvents: "none",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.1, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Inner glow ring */}
          <motion.div
            className="absolute"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "1.5px solid rgba(200,155,60,0.15)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -55%)",
              pointerEvents: "none",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.15, 0.6],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />

          {/* Soft radial glow behind logo */}
          <motion.div
            className="absolute"
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(200,155,60,0.12) 0%, rgba(200,155,60,0.04) 40%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -55%)",
              pointerEvents: "none",
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Logo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative mb-8"
          >
            {/* Pulsing glow aura */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(200,155,60,0.25) 0%, transparent 70%)",
                filter: "blur(20px)",
                transform: "scale(2.5)",
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [2.2, 2.8, 2.2],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Logo with gentle breathing */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/logo.png"
                alt="IREAD ALPHA"
                className="w-28 h-28 md:w-32 md:h-32 object-contain relative z-10"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(200,155,60,0.35)) drop-shadow(0 0 60px rgba(200,155,60,0.15))",
                }}
              />
            </motion.div>
          </motion.div>

          {/* School Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center"
          >
            <h1
              className="text-white text-2xl md:text-3xl font-bold tracking-wide"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              IREAD ALPHA
            </h1>
            <motion.p
              className="text-white/40 text-xs md:text-sm tracking-[4px] mt-2 uppercase"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              English Medium High School
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

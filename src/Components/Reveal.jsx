import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Reveal({ onComplete }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Start opening the doors after a tiny delay
    const timer = setTimeout(() => setOpen(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (open) {
      // After the door animation finishes (0.8s), signal complete
      const timer = setTimeout(() => onComplete?.(), 850);
      return () => clearTimeout(timer);
    }
  }, [open, onComplete]);

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none">
      {/* Left Door */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: open ? "-100%" : "0%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-1/2 h-full"
        style={{ background: "linear-gradient(135deg, #081D42, #0B2148)" }}
      >
        <div
          className="absolute top-0 right-0 w-[2px] h-full"
          style={{
            background: "linear-gradient(to bottom, transparent, #C89B3C, transparent)",
          }}
        />
      </motion.div>

      {/* Right Door */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: open ? "100%" : "0%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{ background: "linear-gradient(225deg, #081D42, #0B2148)" }}
      >
        <div
          className="absolute top-0 left-0 w-[2px] h-full"
          style={{
            background: "linear-gradient(to bottom, transparent, #C89B3C, transparent)",
          }}
        />
      </motion.div>

      {/* Center Gold Line */}
      <motion.div
        initial={{ scaleY: 1, opacity: 1 }}
        animate={{ scaleY: open ? 0 : 1, opacity: open ? 0 : 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full"
        style={{
          background: "linear-gradient(to bottom, transparent 10%, #C89B3C 50%, transparent 90%)",
        }}
      />
    </div>
  );
}

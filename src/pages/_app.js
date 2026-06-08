import "@/styles/globals.css";
import { useState, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Lenis from "lenis";

// Dynamic imports to avoid SSR issues with animations
const Loader = dynamic(() => import("@/Components/Loader"), { ssr: false });
const Reveal = dynamic(() => import("@/Components/Reveal"), { ssr: false });

export default function App({ Component, pageProps }) {
  const [phase, setPhase] = useState("loading"); // loading → revealing → ready
  const lenisRef = useRef(null);

  const handleLoaderComplete = useCallback(() => {
    setPhase("revealing");
  }, []);

  const handleRevealComplete = useCallback(() => {
    setPhase("ready");
  }, []);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Expose lenis to window for GSAP ScrollTrigger integration
    window.__lenis = lenis;

    return () => {
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  // Pause Lenis during loading/reveal phases
  useEffect(() => {
    if (lenisRef.current) {
      if (phase === "loading" || phase === "revealing") {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [phase]);

  return (
    <>
      {/* Loader */}
      {phase === "loading" && <Loader onComplete={handleLoaderComplete} />}

      {/* Reveal Doors */}
      {phase === "revealing" && <Reveal onComplete={handleRevealComplete} />}

      {/* Main Content — always rendered but hidden during loading */}
      <div
        style={{
          opacity: phase === "loading" ? 0 : 1,
          visibility: phase === "loading" ? "hidden" : "visible",
          transition: "opacity 0.5s ease",
        }}
      >
        <Component {...pageProps} isReady={phase === "ready"} />
      </div>
    </>
  );
}

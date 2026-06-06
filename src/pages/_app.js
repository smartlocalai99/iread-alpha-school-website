import "@/styles/globals.css";
import { useState, useCallback } from "react";
import dynamic from "next/dynamic";

// Dynamic imports to avoid SSR issues with animations
const Loader = dynamic(() => import("@/Components/Loader"), { ssr: false });
const Reveal = dynamic(() => import("@/Components/Reveal"), { ssr: false });

export default function App({ Component, pageProps }) {
  const [phase, setPhase] = useState("loading"); // loading → revealing → ready

  const handleLoaderComplete = useCallback(() => {
    setPhase("revealing");
  }, []);

  const handleRevealComplete = useCallback(() => {
    setPhase("ready");
  }, []);

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
        <Component {...pageProps} />
      </div>
    </>
  );
}

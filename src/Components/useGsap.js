import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook to animate text with a character-by-character reveal
 * @param {Object} options - Animation options
 * @param {string} options.trigger - CSS selector or trigger element
 * @param {number} options.delay - Delay before animation starts
 * @param {number} options.stagger - Stagger between characters
 */
export function useTextReveal(ref, options = {}) {
  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;

    const el = ref.current;
    const text = el.textContent;
    el.innerHTML = "";
    el.style.visibility = "visible";

    // Wrap each character in a span
    const chars = text.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(40px) rotateX(-90deg)";
      span.style.transformOrigin = "bottom";
      el.appendChild(span);
      return span;
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    tl.to(chars, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.6,
      stagger: options.stagger || 0.02,
      delay: options.delay || 0,
      ease: "power3.out",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [ref, options.delay, options.stagger]);
}

/**
 * Hook for word-by-word line reveal animation
 */
export function useWordReveal(ref, options = {}) {
  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;

    const el = ref.current;
    const words = el.textContent.split(" ");
    el.innerHTML = "";

    const spans = words.map((word, i) => {
      const wrapper = document.createElement("span");
      wrapper.style.display = "inline-block";
      wrapper.style.overflow = "hidden";
      wrapper.style.verticalAlign = "top";

      const inner = document.createElement("span");
      inner.textContent = word;
      inner.style.display = "inline-block";
      inner.style.transform = "translateY(110%)";

      wrapper.appendChild(inner);
      el.appendChild(wrapper);

      if (i < words.length - 1) {
        const space = document.createTextNode("\u00A0");
        el.appendChild(space);
      }

      return inner;
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    tl.to(spans, {
      y: 0,
      duration: 0.8,
      stagger: options.stagger || 0.04,
      delay: options.delay || 0,
      ease: "power4.out",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [ref, options.delay, options.stagger]);
}

/**
 * Hook for parallax scroll effect on an element
 */
export function useParallax(ref, options = {}) {
  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;

    const el = ref.current;
    const speed = options.speed || 0.3;

    gsap.to(el, {
      y: () => speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: options.trigger ? document.querySelector(options.trigger) : el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el || (options.trigger && st.trigger === document.querySelector(options.trigger))) {
          st.kill();
        }
      });
    };
  }, [ref, options.speed, options.trigger]);
}

/**
 * Hook for scroll-triggered scale/fade entrance
 */
export function useScrollReveal(ref, options = {}) {
  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;

    const el = ref.current;

    gsap.from(el, {
      y: options.y || 60,
      opacity: 0,
      scale: options.scale || 1,
      rotateX: options.rotateX || 0,
      filter: options.blur ? `blur(${options.blur}px)` : "none",
      duration: options.duration || 1,
      delay: options.delay || 0,
      ease: options.ease || "power3.out",
      scrollTrigger: {
        trigger: el,
        start: options.start || "top 85%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [ref, options.y, options.scale, options.rotateX, options.blur, options.duration, options.delay, options.ease, options.start]);
}

/**
 * Hook for horizontal line/divider draw animation
 */
export function useLineReveal(ref, options = {}) {
  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;

    const el = ref.current;

    gsap.from(el, {
      scaleX: 0,
      transformOrigin: options.origin || "left center",
      duration: options.duration || 0.8,
      delay: options.delay || 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [ref, options.origin, options.duration, options.delay]);
}

export { gsap, ScrollTrigger };

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  Calculator,
  Binary,
  Monitor,
  MessageCircle,
  Trophy,
  Mic2,
  PenTool,
} from "lucide-react";

const programs = [
  {
    id: "iit-neet",
    title: "IIT-NEET Foundation",
    subtitle: "Building Future Engineers & Doctors",
    desc: "Comprehensive foundation program for competitive exams with focus on Mathematics, Physics, Chemistry and Biology. Developing analytical thinking and problem-solving skills from an early age.",
    image: "/program-iit-neet.png",
    icon: GraduationCap,
    benefits: ["Analytical Thinking", "Exam Readiness", "Strong Concepts"],
  },
  {
    id: "abacus",
    title: "Abacus",
    subtitle: "Builds Strong Foundation of Maths",
    desc: "Enhances mental calculation, concentration, memory and listening skills through the ancient tool of Abacus. Students develop speed and accuracy in arithmetic operations.",
    image: "/program-abacus.png",
    icon: Calculator,
    benefits: ["Improves Concentration", "Faster Calculations", "Better Accuracy"],
  },
  {
    id: "vedic-maths",
    title: "Vedic Maths",
    subtitle: "Ancient Wisdom for Modern Minds",
    desc: "Learn powerful mathematical shortcuts and techniques from ancient Indian mathematics. Makes complex calculations simple, fast and enjoyable for students of all levels.",
    image: "/program-vedic-maths.png",
    icon: Binary,
    benefits: ["Speed Mathematics", "Mental Agility", "Logical Thinking"],
  },
  {
    id: "computer",
    title: "Computer Education",
    subtitle: "Digital Literacy for Tomorrow",
    desc: "Hands-on computer education with focus on digital literacy, basic programming concepts, and practical applications. Preparing students for the digital world.",
    image: "/program-computer.png",
    icon: Monitor,
    benefits: ["Digital Skills", "Practical Learning", "Tech Readiness"],
  },
  {
    id: "english",
    title: "Spoken English",
    subtitle: "Communicate with Confidence",
    desc: "Interactive spoken English program focusing on fluency, pronunciation, vocabulary building and confident communication skills for real-world conversations.",
    image: "/program-english.png",
    icon: MessageCircle,
    benefits: ["Fluent Speaking", "Building Confidence", "Clear Communication"],
  },
  {
    id: "sports",
    title: "Sports & Co-Curricular",
    subtitle: "Active Body, Active Mind",
    desc: "Comprehensive sports and co-curricular activities including athletics, team sports, yoga, and physical fitness programs to develop teamwork and healthy habits.",
    image: "/program-sports.png",
    icon: Trophy,
    benefits: ["Physical Fitness", "Team Spirit", "Discipline"],
  },
  {
    id: "seminars",
    title: "Seminars & Debates",
    subtitle: "Think. Speak. Inspire.",
    desc: "Regular seminars, debates, and public speaking opportunities that develop critical thinking, articulation, research skills and the confidence to express ideas boldly.",
    image: "/program-seminar.png",
    icon: Mic2,
    benefits: ["Public Speaking", "Critical Thinking", "Leadership"],
  },
  {
    id: "calligraphy",
    title: "Calligraphy",
    subtitle: "The Art of Beautiful Writing",
    desc: "Dedicated calligraphy classes that develop fine motor skills, patience, creativity and appreciation for the art of beautiful handwriting across multiple scripts.",
    image: "/program-calligraphy.png",
    icon: PenTool,
    benefits: ["Creative Expression", "Fine Motor Skills", "Patience"],
  },
];

export default function ProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [countdown, setCountdown] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const pauseTimeoutRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const activeProgram = programs[activeIndex];
  const totalPrograms = programs.length;

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalPrograms);
    setCountdown(5);
  }, [totalPrograms]);

  // Auto-rotation
  useEffect(() => {
    if (isPaused || !inView) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          goToNext();
          return 5;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, inView, goToNext]);

  // Trigger orbital animation on first view
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const selectProgram = (index) => {
    setActiveIndex(index);
    setCountdown(5);
    // Pause briefly on user interaction, then resume
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 5000);
  };

  const handlePause = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  const handleResume = () => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 3000);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  // Responsive wheel sizes
  const getWheelConfig = () => {
    if (typeof window === "undefined") return { size: 480, radius: 200 };
    const w = window.innerWidth;
    if (w < 768) return { size: 300, radius: 120 };
    if (w < 1024) return { size: 380, radius: 155 };
    return { size: 480, radius: 200 };
  };

  const [wheelConfig, setWheelConfig] = useState({ size: 480, radius: 200 });

  useEffect(() => {
    const update = () => setWheelConfig(getWheelConfig());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const wheelSize = wheelConfig.size;
  const radius = wheelConfig.radius;

  const getWheelPosition = (index) => {
    const angle = (index * 360) / totalPrograms - 90; // Start from top
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * radius,
      y: Math.sin(rad) * radius,
    };
  };

  // Responsive node sizing
  const nodeSize = wheelSize < 350 ? 52 : wheelSize < 400 ? 62 : 72;
  const centerSize = wheelSize < 350 ? 100 : wheelSize < 400 ? 120 : 150;
  const labelMaxW = wheelSize < 350 ? 70 : 90;

  return (
    <section
      ref={ref}
      id="programs"
      className="relative overflow-hidden py-16 md:py-20 lg:py-24"
      style={{ background: "linear-gradient(180deg, #FDFBF7 0%, #FFF 50%, #FDFBF7 100%)" }}
    >
      {/* Section Header */}
      <div className="max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-3 h-3 rotate-45 bg-[#C89B3C]" />
            <p className="text-[#C89B3C] uppercase tracking-[4px] font-semibold text-sm">
              Our Programs
            </p>
            <div className="w-3 h-3 rotate-45 bg-[#C89B3C]" />
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#0B1F45] leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Holistic Learning for{" "}
            <span className="italic text-[#C89B3C]">Every</span> Student
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 leading-7 md:leading-8 text-sm md:text-base">
            Explore our wide range of programs designed to bring out the best
            in every child.
          </p>
        </div>

        {/* Main Content Grid — stacks on mobile, side by side on md+ */}
        <div className="grid md:grid-cols-[1fr_1fr] gap-8 md:gap-10 lg:gap-14 items-center">

          {/* LEFT: Program Detail Card */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProgram.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-[24px] md:rounded-[28px] border border-gray-100 shadow-lg overflow-hidden"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={activeProgram.image}
                    alt={activeProgram.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Floating icon badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <activeProgram.icon size={20} className="text-[#C89B3C]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-[#FDF5E6] flex items-center justify-center shrink-0">
                      <activeProgram.icon size={20} className="text-[#C89B3C]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0B1F45] truncate">
                        {activeProgram.title}
                      </h3>
                      <p className="text-[#C89B3C] text-[11px] sm:text-xs md:text-sm font-medium mt-0.5 truncate">
                        {activeProgram.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-6 sm:leading-7 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm md:text-base">
                    {activeProgram.desc}
                  </p>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                    {activeProgram.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-1.5 sm:gap-2 bg-[#FBFAF7] border border-gray-100 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 md:py-2"
                      >
                        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-md bg-[#C89B3C]/10 flex items-center justify-center shrink-0">
                          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                            <path d="M1 5L4 8L9 2" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-[10px] sm:text-[11px] md:text-xs font-medium text-gray-700 whitespace-nowrap">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Programs Wheel — visible on all devices */}
          <div
            className="flex flex-col items-center"
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
          >
            {/* Wheel Container — scales responsively */}
            <div className="relative mb-8 sm:mb-10 md:mb-12 lg:mb-16" style={{ width: `${wheelSize}px`, height: `${wheelSize}px` }}>

              {/* Outer decorative rings */}
              <div
                className="absolute inset-0 rounded-full border-2 border-gray-200/60"
                style={{ borderStyle: "dashed" }}
              />
              <div
                className="absolute inset-3 rounded-full border border-[#C89B3C]/10"
              />

              {/* Connection line to active node */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <line
                  x1={wheelSize / 2}
                  y1={wheelSize / 2}
                  x2={wheelSize / 2 + getWheelPosition(activeIndex).x}
                  y2={wheelSize / 2 + getWheelPosition(activeIndex).y}
                  stroke="rgba(200,155,60,0.2)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
              </svg>

              {/* Program items around the wheel */}
              {programs.map((program, index) => {
                const pos = getWheelPosition(index);
                const isActive = index === activeIndex;
                const Icon = program.icon;

                return (
                  <div
                    key={program.id}
                    className="absolute"
                    style={{
                      left: `${wheelSize / 2 + pos.x}px`,
                      top: `${wheelSize / 2 + pos.y}px`,
                      transform: "translate(-50%, -50%)",
                      zIndex: isActive ? 20 : 10,
                    }}
                  >
                    <motion.button
                      onClick={() => selectProgram(index)}
                      className="flex flex-col items-center gap-1 sm:gap-1.5 group cursor-pointer"
                      style={{ pointerEvents: "auto" }}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.92 }}
                      animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Image node with circular crop */}
                      <div className="relative">
                        {/* Glow ring for active */}
                        {isActive && (
                          <div
                            className="absolute -inset-1.5 sm:-inset-2 rounded-full"
                            style={{
                              background: "conic-gradient(from 0deg, #C89B3C, #D4AD5A, #C89B3C, #A67E2E, #C89B3C)",
                            }}
                          />
                        )}

                        {/* Image container */}
                        <div
                          className={`
                            relative rounded-full overflow-hidden transition-all duration-400 shadow-sm
                            ${isActive
                              ? "shadow-lg ring-0"
                              : "border-2 border-gray-200 group-hover:border-[#C89B3C] group-hover:shadow-md"
                            }
                          `}
                          style={{ width: `${nodeSize}px`, height: `${nodeSize}px` }}
                        >
                          <img
                            src={program.image}
                            alt={program.title}
                            className="w-full h-full object-cover object-center"
                          />

                          {/* Dark overlay for inactive */}
                          <div
                            className={`absolute inset-0 transition-all duration-300 ${
                              isActive
                                ? "bg-transparent"
                                : "bg-[#0B2148]/20 group-hover:bg-transparent"
                            }`}
                          />
                        </div>

                        {/* Small icon badge */}
                        <div
                          className={`
                            absolute -bottom-1 -right-1 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300
                            ${isActive ? "bg-[#C89B3C]" : "bg-[#0B2148] group-hover:bg-[#C89B3C]"}
                          `}
                          style={{ width: nodeSize < 60 ? 18 : 24, height: nodeSize < 60 ? 18 : 24 }}
                        >
                          <Icon size={nodeSize < 60 ? 9 : 12} />
                        </div>
                      </div>

                      {/* Label — hidden on very small screens to avoid overlap */}
                      <span
                        className={`
                          hidden sm:block text-[9px] md:text-[10px] font-semibold text-center leading-tight uppercase tracking-wide transition-colors duration-300
                          ${isActive ? "text-[#0B2148]" : "text-gray-500 group-hover:text-[#0B2148]"}
                        `}
                        style={{ maxWidth: `${labelMaxW}px` }}
                      >
                        {program.title}
                      </span>
                    </motion.button>
                  </div>
                );
              })}

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div
                  className="rounded-full bg-white flex flex-col items-center justify-center"
                  style={{
                    width: `${centerSize}px`,
                    height: `${centerSize}px`,
                    border: "3px solid rgba(200,155,60,0.35)",
                    boxShadow: "0 8px 40px rgba(11,33,72,0.12), 0 0 0 8px rgba(200,155,60,0.06)",
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="IREAD ALPHA"
                    className="object-contain mb-1"
                    style={{ width: centerSize * 0.37, height: centerSize * 0.37 }}
                  />
                  <p
                    className="font-bold text-[#0B2148] tracking-wide"
                    style={{ fontFamily: "var(--font-serif)", fontSize: centerSize < 120 ? 8 : 11 }}
                  >
                    I READ ALPHA
                  </p>
                  <p className="text-gray-500 tracking-wider uppercase" style={{ fontSize: centerSize < 120 ? 6 : 8 }}>
                    English Medium High School
                  </p>
                </div>
              </div>
            </div>

            {/* Auto-rotation indicator */}
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="7" stroke="#C89B3C" strokeWidth="1.5" strokeDasharray="4 3" />
              </svg>
              <span>AUTO ROTATING IN</span>
              <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-[#0B2148] text-white text-[10px] sm:text-xs font-bold">
                {isPaused ? "⏸" : String(countdown).padStart(2, "0")}
              </span>
              <span>SEC</span>
            </div>

            <p className="text-[10px] sm:text-xs text-gray-400 mt-1.5 sm:mt-2">
              Tap any program to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

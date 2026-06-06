import { useState, useEffect, useCallback } from "react";
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
  };

  // Calculate positions around the wheel
  const getWheelPosition = (index) => {
    const angle = (index * 360) / totalPrograms - 90; // Start from top
    const radius = 185; // px
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * radius,
      y: Math.sin(rad) * radius,
    };
  };

  // Wheel container size
  const wheelSize = 440;

  return (
    <section
      ref={ref}
      id="programs"
      className="relative overflow-hidden py-16 md:py-20 lg:py-24"
      style={{ background: "linear-gradient(180deg, #FDFBF7 0%, #FFF 50%, #FDFBF7 100%)" }}
    >
      {/* Floating decorative particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#C89B3C]/10"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      {/* Section Header */}
      <div className="max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <motion.div
              className="w-3 h-3 rotate-45 bg-[#C89B3C]"
              animate={{ rotate: [45, 225, 45] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-[#C89B3C] uppercase tracking-[4px] font-semibold text-sm">
              Our Programs
            </p>
            <motion.div
              className="w-3 h-3 rotate-45 bg-[#C89B3C]"
              animate={{ rotate: [45, -135, 45] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#0B1F45] leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Holistic Learning for{" "}
            <span className="italic text-[#C89B3C]">Every</span> Student
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 leading-7 md:leading-8">
            Explore our wide range of programs designed to bring out the best
            in every child.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-center">

          {/* LEFT: Program Detail Card with glassmorphism entrance */}
          <motion.div
            initial={{ opacity: 0, x: -60, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProgram.id}
                initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, scale: 0.95, filter: "blur(8px)" }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 25 }}
                className="bg-white rounded-[28px] border border-gray-100 shadow-lg overflow-hidden"
              >
                {/* Image — robust container */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <motion.img
                    src={activeProgram.image}
                    alt={activeProgram.title}
                    className="w-full h-full object-cover object-center"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Floating icon badge */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <activeProgram.icon size={22} className="text-[#C89B3C]" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FDF5E6] flex items-center justify-center shrink-0">
                      <activeProgram.icon size={22} className="text-[#C89B3C]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0B1F45] truncate">
                        {activeProgram.title}
                      </h3>
                      <p className="text-[#C89B3C] text-xs sm:text-sm font-medium mt-0.5 truncate">
                        {activeProgram.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-7 mb-5 sm:mb-6 text-sm sm:text-base">
                    {activeProgram.desc}
                  </p>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {activeProgram.benefits.map((benefit, i) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-2 bg-[#FBFAF7] border border-gray-100 rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2"
                      >
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-[#C89B3C]/10 flex items-center justify-center shrink-0">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M1 5L4 8L9 2" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-[11px] sm:text-xs font-medium text-gray-700 whitespace-nowrap">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* RIGHT: Programs Wheel with IMAGE nodes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
            className="hidden lg:flex flex-col items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Wheel Container */}
            <div className="relative w-[440px] h-[440px]">

              {/* Outer decorative rings with rotation */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-gray-200/60"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{ borderStyle: "dashed", borderDashoffset: 0 }}
              />
              <motion.div
                className="absolute inset-3 rounded-full border border-[#C89B3C]/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />

              {/* Connection line to active node */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <motion.line
                  x1="50%" y1="50%"
                  x2={`${50 + (getWheelPosition(activeIndex).x / 440) * 100}%`}
                  y2={`${50 + (getWheelPosition(activeIndex).y / 440) * 100}%`}
                  stroke="rgba(200,155,60,0.2)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </svg>

              {/* Program items around the wheel — now with IMAGES */}
              {programs.map((program, index) => {
                const pos = getWheelPosition(index);
                const isActive = index === activeIndex;
                const Icon = program.icon;
                const orbitAngle = (index * 360) / totalPrograms;

                return (
                  <motion.div
                    key={program.id}
                    className="absolute z-10"
                    style={{
                      left: `${wheelSize / 2 + pos.x}px`,
                      top: `${wheelSize / 2 + pos.y}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={hasAnimated ? false : {
                      opacity: 0,
                      scale: 0,
                      rotate: orbitAngle + 180,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 120,
                      damping: 15,
                    }}
                  >
                    <motion.button
                      onClick={() => selectProgram(index)}
                      className="flex flex-col items-center gap-1.5 group"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.92 }}
                      animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Image node with circular crop */}
                      <div className="relative">
                        {/* Glow ring for active */}
                        {isActive && (
                          <motion.div
                            className="absolute -inset-1.5 rounded-full"
                            style={{
                              background: "conic-gradient(from 0deg, #C89B3C, #D4AD5A, #C89B3C, #A67E2E, #C89B3C)",
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          />
                        )}

                        {/* Image container */}
                        <div
                          className={`
                            relative w-16 h-16 rounded-full overflow-hidden transition-all duration-400 shadow-sm
                            ${isActive
                              ? "shadow-lg ring-0"
                              : "border-2 border-gray-200 group-hover:border-[#C89B3C] group-hover:shadow-md"
                            }
                          `}
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
                            absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300
                            ${isActive ? "bg-[#C89B3C]" : "bg-[#0B2148] group-hover:bg-[#C89B3C]"}
                          `}
                        >
                          <Icon size={12} />
                        </div>
                      </div>

                      <span
                        className={`
                          text-[10px] font-semibold text-center leading-tight max-w-[80px] uppercase tracking-wide transition-colors duration-300
                          ${isActive ? "text-[#0B2148]" : "text-gray-500 group-hover:text-[#0B2148]"}
                        `}
                      >
                        {program.title.length > 18
                          ? program.title.replace(" & ", " &\n")
                          : program.title}
                      </span>
                    </motion.button>
                  </motion.div>
                );
              })}

              {/* Center Logo with expanding glow */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                {/* Pulsing glow rings behind center */}
                <motion.div
                  className="absolute w-[170px] h-[170px] rounded-full"
                  style={{ border: "1px solid rgba(200,155,60,0.1)" }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute w-[170px] h-[170px] rounded-full"
                  style={{ border: "1px solid rgba(200,155,60,0.08)" }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
                />

                <motion.div
                  className="w-[150px] h-[150px] rounded-full bg-white flex flex-col items-center justify-center"
                  style={{
                    border: "3px solid rgba(200,155,60,0.35)",
                    boxShadow: "0 8px 40px rgba(11,33,72,0.12), 0 0 0 8px rgba(200,155,60,0.06)",
                  }}
                  animate={{ boxShadow: [
                    "0 8px 40px rgba(11,33,72,0.12), 0 0 0 8px rgba(200,155,60,0.06)",
                    "0 8px 40px rgba(11,33,72,0.15), 0 0 0 12px rgba(200,155,60,0.1)",
                    "0 8px 40px rgba(11,33,72,0.12), 0 0 0 8px rgba(200,155,60,0.06)",
                  ]}}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src="/logo.png"
                    alt="IREAD ALPHA"
                    className="w-14 h-14 object-contain mb-1.5"
                  />
                  <p
                    className="text-[11px] font-bold text-[#0B2148] tracking-wide"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    I READ ALPHA
                  </p>
                  <p className="text-[8px] text-gray-500 tracking-wider uppercase">
                    English Medium High School
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Auto-rotation indicator */}
            <div className="flex items-center gap-3 mt-6 text-sm text-gray-500">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`${!isPaused ? "animate-spin" : ""}`}
                style={{ animationDuration: "3s" }}
              >
                <circle cx="8" cy="8" r="7" stroke="#C89B3C" strokeWidth="1.5" strokeDasharray="4 3" />
              </svg>
              <span>AUTO ROTATING IN</span>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#0B2148] text-white text-xs font-bold">
                {isPaused ? "⏸" : String(countdown).padStart(2, "0")}
              </span>
              <span>SEC</span>
            </div>

            <p className="text-xs text-gray-400 mt-2">
              Or click any program to explore
            </p>
          </motion.div>
        </div>

        {/* Mobile/Tablet Horizontal Scroller (below lg) */}
        <div className="lg:hidden mt-8 sm:mt-10">
          <div className="flex gap-2.5 sm:gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={program.id}
                  onClick={() => selectProgram(index)}
                  className={`
                    flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl shrink-0 snap-start transition-all duration-300 text-xs sm:text-sm font-medium
                    ${isActive
                      ? "bg-[#0B2148] text-white shadow-lg"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-[#C89B3C]"
                    }
                  `}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Small circular image for mobile */}
                  <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 border border-white/30">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="whitespace-nowrap">{program.title}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile active dots */}
          <div className="flex justify-center gap-1.5 mt-3">
            {programs.map((_, index) => (
              <button
                key={index}
                onClick={() => selectProgram(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 h-2 bg-[#C89B3C]"
                    : "w-2 h-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "./useGsap";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="grid lg:grid-cols-[48%_52%] lg:min-h-[620px]">

        {/* LEFT — Cinematic layout with animations */}
        <div className="flex items-center bg-white z-10">
          <div className="max-w-[760px] px-6 sm:px-8 lg:px-14 py-6 lg:py-8 flex flex-col justify-center">

            <motion.p
              className="text-[#C89B3C] tracking-[4px] font-semibold mb-3 text-sm sm:text-base"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              WELCOME TO
            </motion.p>

            <motion.h1
              className="text-[#0B2148] leading-[1.08] text-[32px] sm:text-[42px] md:text-[46px] lg:text-[54px]"
              style={{ fontFamily: "var(--font-serif)" }}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="inline-block">
                IREAD ALPHA
              </span>
              <br />
              <span className="inline-block">
                ENGLISH MEDIUM
              </span>
              <br />
              <span className="inline-block text-[#C89B3C]">
                HIGH SCHOOL
              </span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              className="flex items-center gap-4 mt-4 origin-left"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-12 h-[2px] bg-[#C89B3C]" style={{ width: 48 }} />
              <div className="w-3 h-3 rotate-45 border border-[#C89B3C]" />
              <div className="w-12 h-[2px] bg-[#C89B3C]" style={{ width: 48 }} />
            </motion.div>

            <motion.h3
              className="mt-4 text-[18px] sm:text-[22px] md:text-[26px] leading-tight text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Building Strong Foundations
              <br />
              For A Successful Tomorrow
            </motion.h3>

            <motion.p
              className="mt-4 text-gray-600 text-[14px] sm:text-[16px] md:text-[17px] leading-7 sm:leading-8 max-w-[560px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Where every student is encouraged to learn,
              grow, and succeed with confidence, character
              and academic excellence.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col xs:flex-row flex-wrap gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a
                href="#admissions"
                className="bg-[#052A63] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#0B2148] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base text-center"
              >
                Apply For Admission
              </a>

              <a
                href="#about"
                className="border border-[#C89B3C] text-[#C89B3C] px-6 py-3 rounded-xl font-medium hover:bg-[#C89B3C] hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base text-center"
              >
                Explore Our School
              </a>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-6 text-sm sm:text-base font-medium text-[#0B2148]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                "Experienced Faculty",
                "Safe Environment",
                "Academic Excellence",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C89B3C] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 pt-4 border-t border-gray-100"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {[
                { value: "10+", label: "Years" },
                { value: "1500+", label: "Students" },
                { value: "Govt.", label: "Recognised" },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span
                    className="text-[#C89B3C] text-xl sm:text-2xl font-bold"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {item.value}
                  </span>
                  <span className="text-gray-500 text-xs sm:text-sm font-medium">{item.label}</span>
                  {i < 2 && (
                    <div className="w-px h-6 bg-gray-200 ml-2 sm:ml-4 hidden sm:block" />
                  )}
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* RIGHT IMAGE — object-cover fills entire container */}
        <div className="relative min-h-[400px] sm:min-h-[550px] lg:min-h-full lg:h-full overflow-hidden bg-[#0B2148]">
          <motion.img
            src="/Hero.jpeg"
            alt="IREAD ALPHA English Medium High School Campus"
            className="absolute inset-0"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "50% center",
              userSelect: "none"
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          />

          {/* Soft Blend */}
          <div
            className="absolute left-0 top-0 h-full w-[14%] pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.98), rgba(255,255,255,0))",
            }}
          />

          {/* Top red ornamental band */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B1A1A] via-[#C89B3C] to-[#8B1A1A] opacity-60" />
        </div>

      </div>

    </section>
  );
}
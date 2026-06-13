import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, Award } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "./useGsap";

export default function AboutSection() {
  return (
    <section id="about" className="px-5 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* LEFT IMAGES — animated slide-in layout */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main image with rounded corners */}
          <div className="overflow-hidden rounded-3xl mb-5 group aspect-[16/10]">
            <img
              src="/future 1.jpg"
              alt="Students learning at IREAD ALPHA"
              className="w-full h-full object-cover object-center "
            />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <div className="overflow-hidden rounded-3xl group aspect-[4/3]">
              <img
                src="/future 2.jpg"
                alt="Campus activities"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="overflow-hidden rounded-3xl group aspect-[4/3]">
              <img
                src="/future 3.jpg"
                alt="Student achievements"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT — animated slide-in layout */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#C89B3C]" style={{ width: 32 }} />
            <p className="text-[#C89B3C] font-semibold tracking-[3px] uppercase text-sm">
              About Us
            </p>
            <div className="w-8 h-[2px] bg-[#C89B3C]" style={{ width: 32 }} />
          </div>

          {/* Simple Static Heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-[48px] leading-tight text-[#0B1F45] mb-6 md:mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Shaping Bright Futures
          </h2>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 lg:leading-9 mb-8 md:mb-10">
            At IREAD Alpha English Medium High School, we focus on
            academic excellence, character building, and overall
            development. Our dedicated faculty and nurturing
            infrastructure ensure the best learning experience
            for every student. Recognised by the Government of
            Andhra Pradesh, we are committed to creating responsible
            citizens and future leaders.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {/* CARD 1 */}
            <div className="group bg-white border border-gray-100 rounded-3xl p-5 sm:p-6 md:p-7 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-[#0B1F45] text-white flex items-center justify-center mb-4 md:mb-5 group-hover:bg-[#C89B3C] transition duration-500">
                <BookOpen size={24} strokeWidth={1.8} />
              </div>

              <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#0B1F45] mb-3">
                Quality Education
              </h3>

              <div className="w-12 h-[3px] bg-[#C89B3C] rounded-full mb-4" style={{ width: 48 }} />

              <p className="text-gray-600 leading-6 sm:leading-7 text-xs sm:text-sm md:text-base">
                Strong academic foundations with conceptual
                understanding, creativity and future-ready learning.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group bg-white border border-gray-100 rounded-3xl p-5 sm:p-6 md:p-7 ">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-[#C89B3C] text-white flex items-center justify-center mb-4 md:mb-5">
                <Award size={24} strokeWidth={1.8} />
              </div>

              <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#0B1F45] mb-3">
                Character Building
              </h3>

              <div className="w-12 h-[3px] bg-[#C89B3C] rounded-full mb-4" style={{ width: 48 }} />

              <p className="text-gray-600 leading-6 sm:leading-7 text-xs sm:text-sm md:text-base">
                Instilling values, discipline, confidence,
                leadership and responsibility in every student.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
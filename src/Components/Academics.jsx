import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "./useGsap";

export default function AcademicsSection() {
  const academics = [
    {
      title: "Pre Primary",
      desc: "A joyful beginning to learning, discovery and creative exploration.",
      image: "/academic1.png",
      grade: "Nursery - UKG",
    },
    {
      title: "Primary Education",
      desc: "Building strong concepts, essential skills and a love for learning.",
      image: "/academic2.png",
      grade: "Class 1 - 5",
    },
    {
      title: "Secondary Education",
      desc: "Encouraging curiosity, critical thinking and academic growth.",
      image: "/academic3.png",
      grade: "Class 6 - 8",
    },
    {
      title: "High School",
      desc: "Preparing students for board exams and a successful future.",
      image: "/academic4.png",
      grade: "Class 9 - 10",
    },
  ];

  return (
    <section id="academics" className="max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">

      <motion.div
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 md:gap-6 mb-10 md:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <p className="text-[#C89B3C] tracking-[3px] font-semibold uppercase text-sm">
            Academics
          </p>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#0B1F45] mt-3 leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Excellence in Every Step
          </h2>
        </div>

        <a
          href="#admissions"
          className="border border-gray-300 px-6 py-3.5 rounded-xl hover:border-[#C89B3C] hover:text-[#C89B3C] transition duration-300 text-sm md:text-base w-full sm:w-auto text-center"
        >
          Apply For Admission →
        </a>
      </motion.div>

      {/* Animated card grid */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
        {academics.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="academic-card group bg-white rounded-[24px] md:rounded-[28px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div className="overflow-hidden relative aspect-[16/11]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              {/* Grade badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#0B2148]/80 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg">
                {item.grade}
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-6 relative">
              <div className="absolute -top-6 sm:-top-7 left-4 sm:left-5 md:left-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#C89B3C] border-4 border-white shadow-lg flex items-center justify-center">
                <span className="text-white text-sm sm:text-lg font-bold">{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="mt-5 sm:mt-6 md:mt-8">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#0B1F45]">
                  {item.title}
                </h3>

                <div className="mt-2.5 sm:mt-3 h-[3px] w-10 bg-[#C89B3C] rounded-full" style={{ width: 40 }} />

                <p className="mt-3 sm:mt-4 text-gray-600 leading-6 sm:leading-7 text-xs sm:text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
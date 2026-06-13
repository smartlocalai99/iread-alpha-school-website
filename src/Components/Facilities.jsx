import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "./useGsap";

export default function FacilitiesSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const facilities = [
    {
      title: "Computer Lab",
      image: "/future 3.jpg",
    },
    {
      title: "Well-Maintained Classrooms",
      image: "/gallery-classroom.png",
    },
    {
      title: "Sports Area",
      image: "/future 2.jpg",
    },
    {
      title: "Open-Air Auditorium",
      image: "/facility-auditorium.png",
    },
    {
      title: "Cultural Activities",
      image: "/cultural.png",
    },
    {
      title: "Safe Campus Environment",
      desc: "Secure campus with CCTV and child-friendly infrastructure.",
      image: "/school-location.png",
    },
  ];

  return (
    <section id="facilities" className="px-5 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <p className="text-[#C89B3C] tracking-[4px] font-semibold uppercase text-sm">
          Our Facilities
        </p>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#0B1F45] mt-4 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Spaces Designed For
          <br className="hidden sm:block" />
          Learning & Growth
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-5 md:mt-6 leading-7 md:leading-8 text-sm md:text-base">
          A supportive environment where students learn,
          explore, participate and develop with confidence.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-5 md:gap-6">
        {/* Large Featured Image */}
        <motion.div
          className="lg:col-span-7 relative overflow-hidden rounded-[24px] md:rounded-[32px] group"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <img
            src="/high.png"
            alt="IREAD ALPHA Campus"
            className="w-full h-[300px] sm:h-[400px] md:h-[520px] lg:h-full lg:min-h-[620px] object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#041C45]/90 via-[#041C45]/20 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-10 text-white">
            <p className="text-[#C89B3C] uppercase tracking-[3px] mb-2 md:mb-3 text-xs md:text-sm">
              Campus Environment
            </p>

            <h3
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Creating A Safe &
              <br />
              Inspiring Campus
            </h3>
          </div>
        </motion.div>

        {/* Right Cards with animated layout */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-5 auto-rows-fr">
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="facility-card group relative overflow-hidden rounded-[18px] md:rounded-[24px] cursor-pointer"
            >
              <div className="relative w-full h-full min-h-[140px] sm:min-h-[160px] md:min-h-[180px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041C45]/80 via-[#041C45]/20 to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 text-white flex flex-col justify-end">
                  <div className="w-8 h-[3px] bg-[#C89B3C] mb-2 md:mb-3 " style={{ width: 32 }} />
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold leading-tight">
                    {item.title}
                  </h3>
                  {/* Description appears on hover */}
                  <p className="text-white/0overflow-hidden">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
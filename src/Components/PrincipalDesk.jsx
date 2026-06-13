import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "./useGsap";

export default function LeadershipManifesto() {
  return (
    <section className="relative overflow-hidden bg-[#081D42] py-16 md:py-20 lg:py-28">
      {/* Background Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[40px] sm:text-[70px] md:text-[110px] lg:text-[140px] font-black text-white/[0.03] whitespace-nowrap">
          LEADERSHIP
        </h1>
        <h1 className="text-[40px] sm:text-[70px] md:text-[110px] lg:text-[140px] font-black text-white/[0.03] -mt-2 sm:-mt-4 md:-mt-8 lg:-mt-12 whitespace-nowrap">
          EXCELLENCE
        </h1>
      </div>

      <div className="relative z-10 px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="uppercase tracking-[3px] md:tracking-[5px] text-[#C89B3C] font-semibold text-xs sm:text-sm">
            From The Correspondent&apos;s Desk
          </p>

          <h2
            className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mt-3 sm:mt-4 md:mt-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            A Message Beyond
            <br />
            Education
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-8 sm:gap-10 md:gap-14 lg:gap-20 items-center">

          {/* Image Side */}
          <motion.div
            className="relative mx-auto max-w-[360px] sm:max-w-[400px] lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Soft spotlight glow */}
            <div
              className="absolute -inset-8 rounded-full"
              style={{
                background: "radial-gradient(circle at center, rgba(200,155,60,0.08) 0%, transparent 70%)",
              }}
            />

            {/* Decorative border ring */}
            <div className="absolute -inset-3 md:-inset-4 border border-[#C89B3C]/30 rounded-[30px] md:rounded-[40px]" />

            {/* Image container */}
            <div className="overflow-hidden rounded-[30px] md:rounded-[40px] bg-[#102A5E] aspect-[4/5] group cursor-pointer relative">
              <img
                src="/corres.jpg"
                alt="S. Vinod Kumar Reddy — Correspondent, IREAD ALPHA"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 25%" }}
              />

              {/* Subtle gold vignette on hover */}
              <div className="absolute inset-0 opacity-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, transparent 50%, rgba(200,155,60,0.08) 100%)",
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div
              className="text-[#C89B3C] text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-none mb-3 sm:mb-4 md:mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              &ldquo;
            </div>

            {/* Static quote text */}
            <p className="text-white/90 text-base sm:text-lg lg:text-2xl leading-relaxed">
              Education is not merely about academic achievement.
              It is about nurturing character, cultivating
              leadership, inspiring curiosity, and preparing
              young minds to thrive in an ever-changing world.
            </p>

            <div className="w-16 sm:w-20 md:w-24 h-[3px] bg-[#C89B3C] rounded-full mt-6 sm:mt-8 md:mt-10" style={{ width: 96 }} />

            <p className="text-white/70 text-sm sm:text-base lg:text-lg mt-6 sm:mt-8 md:mt-10 leading-7 md:leading-8">
              At our institution, we strive to create an
              environment where every child feels empowered
              to dream boldly, think independently, and grow
              into responsible citizens who contribute
              meaningfully to society.
            </p>

            {/* Signature */}
            <div className="mt-8 sm:mt-10 md:mt-14">
              <div
                className="text-[#C89B3C] text-xl sm:text-2xl md:text-3xl italic mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                S. Vinod Kumar Reddy
              </div>
              <p className="text-white/60 text-xs sm:text-sm md:text-base tracking-wide">
                Correspondent, IREAD ALPHA English Medium High School
              </p>
            </div>
          </motion.div>

        </div>

        {/* Manifesto Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-12 sm:mt-16 md:mt-20 lg:mt-28">
          {[
            {
              num: "01",
              title: "Vision",
              text: "To empower every student with knowledge, confidence, and the ability to shape a better future.",
            },
            {
              num: "02",
              title: "Mission",
              text: "To provide holistic education that nurtures academic excellence, creativity, and leadership.",
            },
            {
              num: "03",
              title: "Values",
              text: "Integrity, respect, discipline, empathy, responsibility, and lifelong learning.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`
                border border-white/10 rounded-[20px] sm:rounded-[24px] md:rounded-[30px] p-5 sm:p-6 md:p-8 lg:p-10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:bg-white/[0.08]
                ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
              `}
            >
              <span
                className="text-[#C89B3C] text-3xl sm:text-4xl md:text-5xl font-black"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {item.num}
              </span>

              <h3
                className="text-white text-xl sm:text-2xl md:text-3xl mt-3 sm:mt-4 md:mt-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {item.title}
              </h3>

              <p className="text-white/70 mt-3 sm:mt-4 md:mt-6 leading-7 md:leading-8 text-sm md:text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
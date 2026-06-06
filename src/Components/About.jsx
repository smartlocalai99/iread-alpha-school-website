import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, Award } from "lucide-react";

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} id="about" className="max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* LEFT IMAGES — parallax depth layer reveal */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Main image with clip-path reveal */}
          <motion.div
            className="overflow-hidden rounded-3xl mb-5 group aspect-[16/10]"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.img
              src="/future 1.jpg"
              alt="Students learning at IREAD ALPHA"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
              className="overflow-hidden rounded-3xl group aspect-[4/3]"
              style={{ perspective: "800px" }}
            >
              <img
                src="/future 2.jpg"
                alt="Campus activities"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 80 }}
              className="overflow-hidden rounded-3xl group aspect-[4/3]"
              style={{ perspective: "800px" }}
            >
              <img
                src="/future 3.jpg"
                alt="Student achievements"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT — blur-to-sharp focus reveal */}
        <motion.div
          initial={{ opacity: 0, x: 60, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="w-8 h-[2px] bg-[#C89B3C]"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
            <p className="text-[#C89B3C] font-semibold tracking-[3px] uppercase text-sm">
              About Us
            </p>
            <motion.div
              className="w-8 h-[2px] bg-[#C89B3C]"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-[48px] leading-tight text-[#0B1F45] mb-6 md:mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Shaping Bright Futures
          </motion.h2>

          <motion.p
            className="text-gray-600 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 lg:leading-9 mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            At IREAD Alpha English Medium High School, we focus on
            academic excellence, character building, and overall
            development. Our dedicated faculty and nurturing
            infrastructure ensure the best learning experience
            for every student. Recognised by the Government of
            Andhra Pradesh, we are committed to creating responsible
            citizens and future leaders.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {/* CARD 1 — 3D tilt hover */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, rotateX: -3, rotateY: 3, scale: 1.02 }}
              className="group bg-white border border-gray-100 rounded-3xl p-5 sm:p-6 md:p-7 shadow-sm hover:shadow-xl transition-all duration-500"
              style={{ perspective: "600px", transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-[#0B1F45] text-white flex items-center justify-center mb-4 md:mb-5 group-hover:bg-[#C89B3C] transition duration-500"
                whileHover={{ rotate: 10 }}
              >
                <BookOpen size={24} strokeWidth={1.8} />
              </motion.div>

              <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#0B1F45] mb-3">
                Quality Education
              </h3>

              <motion.div
                className="w-12 h-[3px] bg-[#C89B3C] rounded-full mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
              />

              <p className="text-gray-600 leading-6 sm:leading-7 text-xs sm:text-sm md:text-base">
                Strong academic foundations with conceptual
                understanding, creativity and future-ready learning.
              </p>
            </motion.div>

            {/* CARD 2 — 3D tilt hover */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.85, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, rotateX: -3, rotateY: -3, scale: 1.02 }}
              className="group bg-white border border-gray-100 rounded-3xl p-5 sm:p-6 md:p-7 shadow-sm hover:shadow-xl transition-all duration-500"
              style={{ perspective: "600px", transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-[#C89B3C] text-white flex items-center justify-center mb-4 md:mb-5 group-hover:bg-[#0B1F45] transition duration-500"
                whileHover={{ rotate: -10 }}
              >
                <Award size={24} strokeWidth={1.8} />
              </motion.div>

              <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#0B1F45] mb-3">
                Character Building
              </h3>

              <motion.div
                className="w-12 h-[3px] bg-[#C89B3C] rounded-full mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.05 }}
              />

              <p className="text-gray-600 leading-6 sm:leading-7 text-xs sm:text-sm md:text-base">
                Instilling values, discipline, confidence,
                leadership and responsibility in every student.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";

export default function LeadershipManifesto() {
  return (
    <section className="relative overflow-hidden bg-[#081D42] py-16 md:py-20 lg:py-28">

      {/* Background Text — slow parallax drift */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden">
        <motion.h1
          className="text-[40px] sm:text-[70px] md:text-[110px] lg:text-[140px] font-black text-white/[0.03] whitespace-nowrap"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          LEADERSHIP
        </motion.h1>
        <motion.h1
          className="text-[40px] sm:text-[70px] md:text-[110px] lg:text-[140px] font-black text-white/[0.03] -mt-2 sm:-mt-4 md:-mt-8 lg:-mt-12 whitespace-nowrap"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          EXCELLENCE
        </motion.h1>
      </div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading — spotlight fade in */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <motion.p
            className="uppercase tracking-[3px] md:tracking-[5px] text-[#C89B3C] font-semibold text-xs sm:text-sm"
            initial={{ opacity: 0, letterSpacing: "0px" }}
            whileInView={{ opacity: 1, letterSpacing: "5px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            From The Correspondent&apos;s Desk
          </motion.p>

          <motion.h2
            className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mt-3 sm:mt-4 md:mt-6"
            style={{ fontFamily: "var(--font-serif)" }}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            A Message Beyond
            <br />
            Education
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-8 sm:gap-10 md:gap-14 lg:gap-20 items-center">

          {/* Image Side — spotlight glow reveal */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 60 }}
            className="relative mx-auto max-w-[360px] sm:max-w-[400px] lg:max-w-none"
          >
            {/* Soft spotlight glow */}
            <motion.div
              className="absolute -inset-8 rounded-full"
              style={{
                background: "radial-gradient(circle at center, rgba(200,155,60,0.08) 0%, transparent 70%)",
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute -inset-3 md:-inset-4 border border-[#C89B3C]/30 rounded-[30px] md:rounded-[40px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <motion.div
              className="overflow-hidden rounded-[30px] md:rounded-[40px] bg-[#102A5E] aspect-[4/5]"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            >
              <img
                src="/corres.jpg"
                alt="S. Vinod Kumar Reddy — Correspondent, IREAD ALPHA"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </motion.div>

          {/* Content — text reveal with quote emphasis */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <motion.div
              className="text-[#C89B3C] text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-none mb-3 sm:mb-4 md:mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
              initial={{ opacity: 0, scale: 2, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 100 }}
            >
              &ldquo;
            </motion.div>

            <motion.p
              className="text-white/90 text-base sm:text-lg lg:text-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Education is not merely about academic achievement.
              It is about nurturing character, cultivating
              leadership, inspiring curiosity, and preparing
              young minds to thrive in an ever-changing world.
            </motion.p>

            <motion.div
              className="w-16 sm:w-20 md:w-24 h-[3px] bg-[#C89B3C] rounded-full mt-6 sm:mt-8 md:mt-10"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
            />

            <motion.p
              className="text-white/70 text-sm sm:text-base lg:text-lg mt-6 sm:mt-8 md:mt-10 leading-7 md:leading-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              At our institution, we strive to create an
              environment where every child feels empowered
              to dream boldly, think independently, and grow
              into responsible citizens who contribute
              meaningfully to society.
            </motion.p>

            {/* Signature — elegant reveal */}
            <motion.div
              className="mt-8 sm:mt-10 md:mt-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.div
                className="text-[#C89B3C] text-xl sm:text-2xl md:text-3xl italic mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1, type: "spring", stiffness: 100 }}
              >
                S. Vinod Kumar Reddy
              </motion.div>
              <p className="text-white/60 text-xs sm:text-sm md:text-base tracking-wide">
                Correspondent, IREAD ALPHA English Medium High School
              </p>
            </motion.div>
          </motion.div>

        </div>

        {/* Manifesto Cards — film-strip slide up */}
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
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                type: "spring",
                stiffness: 80,
                damping: 14,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                backgroundColor: "rgba(255,255,255,0.08)",
                transition: { duration: 0.3 },
              }}
              className={`
                border border-white/10 rounded-[20px] sm:rounded-[24px] md:rounded-[30px] p-5 sm:p-6 md:p-8 lg:p-10 bg-white/[0.03] transition duration-500
                ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
              `}
              style={{ perspective: "600px" }}
            >
              <motion.span
                className="text-[#C89B3C] text-3xl sm:text-4xl md:text-5xl font-black"
                style={{ fontFamily: "var(--font-serif)" }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2, type: "spring", stiffness: 200 }}
              >
                {item.num}
              </motion.span>

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
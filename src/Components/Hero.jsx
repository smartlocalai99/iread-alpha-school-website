import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="grid lg:grid-cols-[48%_52%] lg:min-h-[620px]">

        {/* LEFT — Cinematic stagger reveal */}
        <div className="flex items-center bg-white z-10">
          <div className="max-w-[760px] px-6 sm:px-8 lg:px-14 py-10">

            <motion.p
              initial={{ opacity: 0, x: -50, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[#C89B3C] tracking-[4px] font-semibold mb-4 text-sm sm:text-base"
            >
              WELCOME TO
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[#0B2148] leading-[1.08] text-[32px] sm:text-[42px] md:text-[46px] lg:text-[54px]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                IREAD ALPHA
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.75 }}
              >
                ENGLISH MEDIUM
              </motion.span>
              <br />
              <motion.span
                className="inline-block text-[#C89B3C]"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 100 }}
              >
                HIGH SCHOOL
              </motion.span>
            </motion.h1>

            {/* Divider — SVG stroke draw animation */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 1.1, ease: [0.76, 0, 0.24, 1] }}
              className="flex items-center gap-4 mt-6 origin-left"
            >
              <motion.div
                className="w-12 h-[2px] bg-[#C89B3C]"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              />
              <motion.div
                className="w-3 h-3 rotate-45 border border-[#C89B3C]"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 45 }}
                transition={{ duration: 0.5, delay: 1.3, type: "spring", stiffness: 200 }}
              />
              <motion.div
                className="w-12 h-[2px] bg-[#C89B3C]"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="mt-6 text-[18px] sm:text-[22px] md:text-[26px] leading-tight text-gray-800"
            >
              Building Strong Foundations
              <br />
              For A Successful Tomorrow
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="mt-5 text-gray-600 text-[14px] sm:text-[16px] md:text-[17px] leading-7 sm:leading-8 max-w-[560px]"
            >
              Where every student is encouraged to learn,
              grow, and succeed with confidence, character
              and academic excellence.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="flex flex-col xs:flex-row flex-wrap gap-3 mt-8"
            >
              <motion.a
                href="#admissions"
                className="bg-[#052A63] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#0B2148] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base text-center"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Apply For Admission
              </motion.a>

              <motion.a
                href="#about"
                className="border border-[#C89B3C] text-[#C89B3C] px-6 py-3 rounded-xl font-medium hover:bg-[#C89B3C] hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base text-center"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Our School
              </motion.a>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8 text-sm sm:text-base font-medium text-[#0B2148] pb-4"
            >
              {[
                "Experienced Faculty",
                "Safe Environment",
                "Academic Excellence",
              ].map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ delay: 2.0 + i * 0.15, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#C89B3C] shrink-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.1 + i * 0.15, type: "spring", stiffness: 300 }}
                  />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* RIGHT IMAGE — Ken Burns zoom with parallax */}
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="relative min-h-[320px] sm:min-h-[450px] lg:min-h-[620px] overflow-hidden"
        >
          <motion.img
            src="/Hero.jpeg"
            alt="IREAD ALPHA English Medium High School Campus"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "40% center" }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
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
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B1A1A] via-[#C89B3C] to-[#8B1A1A] opacity-60"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg
          viewBox="0 0 1440 100"
          className="w-full"
          fill="white"
          preserveAspectRatio="none"
        >
          <path d="M0,70 C250,25 500,25 720,70 C950,115 1180,25 1440,70 L1440,100 L0,100 Z" />
        </svg>
      </div>

    </section>
  );
}
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="grid lg:grid-cols-[48%_52%] lg:min-h-[620px]">

        {/* LEFT */}
        <div className="flex items-center bg-white z-10">
          <div className="max-w-[760px] px-6 sm:px-8 lg:px-14 py-10">

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#C89B3C] tracking-[4px] font-semibold mb-4 text-sm sm:text-base"
            >
              WELCOME TO
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[#0B2148] leading-[1.08] text-[32px] sm:text-[42px] md:text-[46px] lg:text-[54px]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              IREAD ALPHA
              <br />
              ENGLISH MEDIUM
              <br />
              <span className="text-[#C89B3C]">HIGH SCHOOL</span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center gap-4 mt-6 origin-left"
            >
              <div className="w-12 h-[2px] bg-[#C89B3C]" />
              <div className="w-3 h-3 rotate-45 border border-[#C89B3C]" />
              <div className="w-12 h-[2px] bg-[#C89B3C]" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-6 text-[18px] sm:text-[22px] md:text-[26px] leading-tight text-gray-800"
            >
              Building Strong Foundations
              <br />
              For A Successful Tomorrow
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mt-5 text-gray-600 text-[14px] sm:text-[16px] md:text-[17px] leading-7 sm:leading-8 max-w-[560px]"
            >
              Where every student is encouraged to learn,
              grow, and succeed with confidence, character
              and academic excellence.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex flex-col xs:flex-row flex-wrap gap-3 mt-8"
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

            {/* Features — grid layout prevents wrapping issues */}
            <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 1.7 }}
  className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8 text-sm sm:text-base font-medium text-[#0B2148] pb-4"
>
  {[
    "Experienced Faculty",
    "Safe Environment",
    "Academic Excellence",
  ].map((feature, i) => (
    <motion.div
      key={feature}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.8 + i * 0.1 }}
      className="flex items-center gap-2"
    >
      <div className="w-2 h-2 rounded-full bg-[#C89B3C] shrink-0" />
      <span>{feature}</span>
    </motion.div>
  ))}
</motion.div>

          </div>
        </div>

        {/* RIGHT IMAGE — robust container */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative min-h-[320px] sm:min-h-[450px] lg:min-h-[620px] overflow-hidden"
        >
          <motion.img
            src="/Hero.jpeg"
            alt="IREAD ALPHA English Medium High School Campus"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "40% center" }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
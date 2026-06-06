import { motion } from "framer-motion";

export default function AdmissionsSection() {
  const steps = [
    {
      number: "01",
      title: "Submit Enquiry",
      desc: "Share your details and our admissions team will guide you through the process.",
    },
    {
      number: "02",
      title: "Campus Visit",
      desc: "Explore our campus, facilities, classrooms and learning environment.",
    },
    {
      number: "03",
      title: "Student Interaction",
      desc: "A friendly interaction to understand the student's interests and strengths.",
    },
    {
      number: "04",
      title: "Admission Confirmation",
      desc: "Complete the formalities and begin your learning journey with us.",
    },
  ];

  return (
    <section id="admissions" className="max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">

      <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center">

        {/* LEFT SIDE — rubber-band stretch entrance */}
        <motion.div
          initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center gap-3 mb-5 flex-wrap"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div
              className="w-8 sm:w-10 h-[2px] bg-[#C89B3C]"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <p className="text-[#C89B3C] uppercase tracking-[3px] md:tracking-[4px] font-semibold text-sm">
              Admissions Open
            </p>
            <motion.div
              className="w-8 sm:w-10 h-[2px] bg-[#C89B3C]"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#0B1F45] leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Admissions
            <br />
            Open 2026-27
          </motion.h2>

          <motion.p
            className="text-gray-600 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 mt-5 md:mt-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join a school that nurtures academic excellence,
            character development, creativity and future-ready
            skills in every child.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-7 md:mt-9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="bg-[#052A63] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-medium hover:bg-[#0B2148] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm md:text-base"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Apply For Admission
            </motion.button>
            <motion.button
              className="border border-[#C89B3C] text-[#C89B3C] px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-medium hover:bg-[#C89B3C] hover:text-white hover:shadow-lg transition-all duration-300 text-sm md:text-base"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Download Prospectus
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-8 md:mt-10 overflow-hidden rounded-[24px] md:rounded-[32px] group aspect-[16/10]"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 80 }}
          >
            <img
              src="/pre.png"
              alt="Admissions at IREAD ALPHA"
              className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — timeline cascade / scroll unfold */}
        <div className="grid gap-4 md:gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                x: 60,
                scaleY: 0.8,
                originY: 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scaleY: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.18,
                type: "spring",
                stiffness: 80,
                damping: 12,
              }}
              whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3 } }}
              className="group bg-white border border-gray-100 rounded-[22px] md:rounded-[28px] p-5 sm:p-6 md:p-7 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-start gap-4 md:gap-5">
                <motion.div
                  className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#C89B3C] text-white flex items-center justify-center font-bold text-sm sm:text-base md:text-lg shrink-0"
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + index * 0.18,
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                  }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  {step.number}
                </motion.div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#0B1F45]">
                    {step.title}
                  </h3>

                  <motion.div
                    className="mt-2 sm:mt-2.5 h-[3px] w-10 bg-[#C89B3C] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.18 }}
                  />

                  <p className="mt-2.5 sm:mt-3 text-gray-600 leading-6 sm:leading-7 text-xs sm:text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Timeline connector — drawing line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block ml-[23px] md:ml-[27px] mt-2 w-[2px] h-4 bg-[#C89B3C]/20"
                  initial={{ height: 0 }}
                  whileInView={{ height: 16 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.18 }}
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";

// Mosaic directions — each card enters from a different direction
const mosaicDirections = [
  { x: 0, y: 60 },      // bottom
  { x: 60, y: 0 },      // right
  { x: -60, y: 0 },     // left
  { x: 0, y: -60 },     // top
  { x: 60, y: 60 },     // bottom-right diagonal
  { x: -60, y: -60 },   // top-left diagonal
];

export default function FacilitiesSection() {
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
      image: "/school-location.png",
    },
  ];

  return (
    <section id="facilities" className="max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16"
      >
        <motion.p
          className="text-[#C89B3C] tracking-[4px] font-semibold uppercase text-sm"
          initial={{ opacity: 0, letterSpacing: "0px" }}
          whileInView={{ opacity: 1, letterSpacing: "4px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Our Facilities
        </motion.p>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#0B1F45] mt-4 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Spaces Designed For
          <br className="hidden sm:block" />
          Learning & Growth
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mt-5 md:mt-6 leading-7 md:leading-8 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A supportive environment where students learn,
          explore, participate and develop with confidence.
        </motion.p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-5 md:gap-6">
        {/* Large Featured Image — clip-path center-outward reveal */}
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(50% 50% 50% 50%)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-7 relative overflow-hidden rounded-[24px] md:rounded-[32px] group"
        >
          <img
            src="/high.png"
            alt="IREAD ALPHA Campus"
            className="w-full h-[300px] sm:h-[400px] md:h-[520px] lg:h-[620px] object-cover object-center group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#041C45]/90 via-[#041C45]/20 to-transparent" />

          <motion.div
            className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-10 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.p
              className="text-[#C89B3C] uppercase tracking-[3px] mb-2 md:mb-3 text-xs md:text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Campus Environment
            </motion.p>

            <h3
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Creating A Safe &
              <br />
              Inspiring Campus
            </h3>
          </motion.div>
        </motion.div>

        {/* Right Cards — mosaic tile assembly from different directions */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-5">
          {facilities.map((item, index) => {
            const dir = mosaicDirections[index % mosaicDirections.length];
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: dir.x,
                  y: dir.y,
                  scale: 0.8,
                  rotate: (index % 2 === 0 ? -5 : 5),
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + index * 0.12,
                  type: "spring",
                  stiffness: 100,
                  damping: 14,
                }}
                whileHover={{ scale: 1.05, rotate: 1, y: -5 }}
                className="group relative overflow-hidden rounded-[18px] md:rounded-[24px] aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#041C45]/80 via-[#041C45]/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
                  <motion.div
                    className="w-8 h-[3px] bg-[#C89B3C] mb-2 md:mb-3 group-hover:w-16 transition-all duration-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.12 }}
                  />
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
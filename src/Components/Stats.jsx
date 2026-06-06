import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const directions = [
  { x: -40, y: 0 },   // from left
  { x: 0, y: 40 },    // from bottom
  { x: 40, y: 0 },    // from right
  { x: 0, y: -40 },   // from top
  { x: -40, y: 40 },  // from bottom-left
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      end: 10,
      suffix: "+",
      title: "Years of Excellence",
    },
    {
      end: 1500,
      suffix: "+",
      title: "Happy Students",
    },
    {
      end: 50,
      suffix: "+",
      title: "Qualified Teachers",
    },
    {
      end: 25,
      suffix: "+",
      title: "Awards & Achievements",
    },
    {
      end: 100,
      suffix: "%",
      title: "Commitment To Success",
    },
  ];

  return (
    <section
      ref={ref}
      className="max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 overflow-hidden rounded-[24px] md:rounded-[32px] border border-[#EAEAEA] bg-white shadow-sm">
        {stats.map((item, index) => {
          const dir = directions[index % directions.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: dir.x, y: dir.y }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className={`
                relative
                group
                p-5 sm:p-6 md:p-8
                border-b sm:border-b-0
                border-r
                border-[#EFEFEF]
                overflow-hidden
                transition-all
                duration-500
                hover:bg-[#FBFAF7]
                ${index === stats.length - 1 ? "border-r-0 col-span-2 sm:col-span-1" : ""}
                ${index === stats.length - 2 ? "border-r-0 sm:border-r" : ""}
              `}
            >
              {/* Gold Corner */}
              <div
                className="absolute top-0 right-0 w-12 h-12 md:w-14 md:h-14 bg-[#C89B3C] opacity-10 clip-corner"
              />

              {/* Watermark */}
              <span className="absolute right-2 sm:right-3 md:right-4 top-2 sm:top-3 md:top-4 text-[40px] sm:text-[50px] md:text-[80px] font-black text-[#0B1F45] opacity-[0.03] select-none">
                {item.end}
              </span>

              {/* Number */}
              <motion.h3
                className="text-[30px] sm:text-[36px] md:text-[52px] font-bold text-[#0B1F45] leading-none"
                style={{ fontFamily: "var(--font-serif)" }}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 + 0.3, type: "spring", stiffness: 200 }}
              >
                {inView && (
                  <CountUp
                    end={item.end}
                    duration={2.5}
                    separator=","
                  />
                )}
                {item.suffix}
              </motion.h3>

              {/* Gold Divider — animated grow */}
              <motion.div
                className="mt-3 sm:mt-4 md:mt-5 h-[3px] bg-[#C89B3C] rounded-full group-hover:w-20 md:group-hover:w-24 transition-all duration-500"
                initial={{ width: 0 }}
                whileInView={{ width: "2.5rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 + 0.5 }}
              />

              {/* Title */}
              <p className="mt-3 sm:mt-4 md:mt-5 text-gray-600 font-medium leading-6 md:leading-7 text-xs sm:text-sm md:text-base">
                {item.title}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
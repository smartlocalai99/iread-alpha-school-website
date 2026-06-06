import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  { src: "/future 1.jpg", title: "Learning Together", category: "academics" },
  { src: "/cultural.png", title: "Cultural Events", category: "events" },
  { src: "/future 3.jpg", title: "Computer Lab", category: "academics" },
  { src: "/future 2.jpg", title: "Sports & Games", category: "activities" },
  { src: "/high.png", title: "Campus Life", category: "campus" },
  { src: "/gallery-assembly.png", title: "Morning Assembly", category: "events" },
  { src: "/pre.png", title: "Pre-Primary Learning", category: "academics" },
  { src: "/open.png", title: "Open Day Celebration", category: "events" },
  { src: "/gallery-classroom.png", title: "Classroom Learning", category: "academics" },
  { src: "/primary.png", title: "Primary Education", category: "academics" },
  { src: "/second.png", title: "Student Activities", category: "activities" },
  { src: "/Hero.jpeg", title: "School Entrance", category: "campus" },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Campus", value: "campus" },
  { label: "Academics", value: "academics" },
  { label: "Activities", value: "activities" },
  { label: "Events", value: "events" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.3 },
  },
};

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10 md:mb-14"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#C89B3C]" />
          <p className="text-[#C89B3C] uppercase tracking-[4px] font-semibold text-sm">
            Gallery
          </p>
          <div className="w-10 h-[2px] bg-[#C89B3C]" />
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#0B1F45]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Life At IREAD ALPHA
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-5 leading-7 md:leading-8 text-sm md:text-base">
          Celebrating learning, achievements, creativity,
          leadership and unforgettable school memories.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12"
      >
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`
              px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300
              ${activeFilter === filter.value
                ? "bg-[#0B2148] text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </motion.div>

      {/* Gallery Grid — uniform heights, no gaps */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.src}
              variants={itemVariants}
              layout
              className="group relative overflow-hidden rounded-[16px] md:rounded-[20px] cursor-pointer aspect-[4/3]"
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#0B2148]/0 group-hover:bg-[#0B2148]/50 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                    <ZoomIn size={18} className="text-white" />
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium text-center px-2">{item.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8"
            onClick={() => setLightbox(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition z-10"
              onClick={() => setLightbox(null)}
            >
              <X size={22} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[85vh] w-full"
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full max-h-[75vh] object-contain rounded-2xl"
              />
              <p className="text-center text-white/80 mt-4 text-lg font-medium">
                {lightbox.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-14"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <motion.div
            className="w-10 h-[2px] bg-[#C89B3C]"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="text-[#C89B3C] uppercase tracking-[4px] font-semibold text-sm">
            Gallery
          </p>
          <motion.div
            className="w-10 h-[2px] bg-[#C89B3C]"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#0B1F45]"
          style={{ fontFamily: "var(--font-serif)" }}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Life At IREAD ALPHA
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mt-5 leading-7 md:leading-8 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Celebrating learning, achievements, creativity,
          leadership and unforgettable school memories.
        </motion.p>
      </motion.div>

      {/* Filter Tabs — pill morph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12"
      >
        {filters.map((filter, i) => (
          <motion.button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`
              px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300
              ${activeFilter === filter.value
                ? "bg-[#0B2148] text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
          >
            {filter.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Grid — masonry pop-in with scale bounce and rotation */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.div
              key={item.src}
              layout
              initial={{
                opacity: 0,
                scale: 0.6,
                rotate: (index % 2 === 0 ? -8 : 8),
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.6,
                rotate: (index % 2 === 0 ? 8 : -8),
                transition: { duration: 0.3 },
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              whileHover={{ scale: 1.05, rotate: 1, y: -5, zIndex: 10 }}
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
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                  >
                    <ZoomIn size={18} className="text-white" />
                  </motion.div>
                  <span className="text-white text-xs md:text-sm font-medium text-center px-2">{item.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox — cinematic zoom */}
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
            <motion.button
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition z-10"
              onClick={() => setLightbox(null)}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <X size={22} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.3, opacity: 0, rotateY: -30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.3, opacity: 0, rotateY: 30 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[85vh] w-full"
              style={{ perspective: "800px" }}
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full max-h-[75vh] object-contain rounded-2xl"
              />
              <motion.p
                className="text-center text-white/80 mt-4 text-lg font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {lightbox.title}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
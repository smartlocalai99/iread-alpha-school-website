import { motion } from "framer-motion";
import {
  BookOpen,
  Award,
  Users,
  Flower2,
  Trophy,
  Palette,
  Shield,
  Star,
  GraduationCap,
} from "lucide-react";

const features = [
  { icon: BookOpen, text: "Quality Education" },
  { icon: Award, text: "Academic Excellence" },
  { icon: Users, text: "Experienced Faculty" },
  { icon: Flower2, text: "Holistic Development" },
  { icon: GraduationCap, text: "IIT-NEET Foundation" },
  { icon: Trophy, text: "Sports & Athletics" },
  { icon: Palette, text: "Arts & Culture" },
  { icon: Shield, text: "Safe Campus" },
  { icon: Star, text: "Strong Values" },
];

export default function FeaturesTicker() {
  const items = [...features, ...features];

  return (
    <motion.section
      className="w-full px-4 sm:px-6 py-6 md:py-8 bg-[#f8f8f8]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1450px] mx-auto bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden relative ticker-shimmer-container">
        {/* Shimmer shine pass overlay */}
        <div className="ticker-shimmer" />

        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ width: "max-content" }}
        >
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
               <div
                key={index}
                className="flex items-center gap-3 md:gap-4 px-7 sm:px-9 md:px-11 py-5 md:py-7 shrink-0 border-r border-gray-200/70 group hover:bg-[#FBFAF7] transition-colors duration-300"
              >
                <Icon
                  size={28}
                  className="text-[#C89B3C] md:w-[34px] md:h-[34px] group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.8}
                />
                <span
                  className="font-semibold text-[#0B1F45] whitespace-nowrap text-[14px] md:text-[16px] tracking-[0.5px]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.text}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]/30 ml-1" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
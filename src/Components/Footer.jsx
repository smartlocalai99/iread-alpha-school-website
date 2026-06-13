import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Programs", href: "#programs" },
  ];

  const exploreLinks = [
    { label: "Facilities", href: "#facilities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-[#071B3D] text-white">

      {/* Top CTA — perspective tilt scale-in */}
      <div className="px-5 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <motion.div
          className="relative overflow-hidden rounded-[24px] md:rounded-[32px] bg-gradient-to-r from-[#0B1F45] to-[#12336B]"
          initial={{ opacity: 0, y: 50, rotateX: 8, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true }}
          style={{ perspective: "800px" }}
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-[#C89B3C]/5 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-1/2 w-[150px] h-[150px] rounded-full bg-[#C89B3C]/3 translate-y-1/2" />

          <div className="grid lg:grid-cols-[55%_45%] items-stretch">
            {/* Left — Text content */}
            <div className="relative z-10 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
              <motion.p
                className="uppercase tracking-[4px] text-[#C89B3C] font-semibold text-xs md:text-sm"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Admissions Open
              </motion.p>

              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 md:mt-4 leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Shape Your Child&apos;s
                <br />
                Future With Us
              </motion.h2>

              <motion.p
                className="text-white/70 mt-4 md:mt-6 text-sm md:text-base lg:text-lg leading-7 max-w-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Empowering young minds with academic excellence,
                leadership and lifelong values.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 mt-7 md:mt-8"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="#admissions"
                  onClick={(e) => handleNavClick(e, "#admissions")}
                  className="bg-[#C89B3C] text-black px-7 py-3.5 rounded-xl font-semibold"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                </motion.a>
                <motion.button
                  className="border border-white/20 px-7 py-3.5 rounded-xl"
                  whileTap={{ scale: 0.95 }}
                >
                  Download Prospectus
                </motion.button>
              </motion.div>
            </div>

            {/* Right — Student image */}
            <motion.div
              className="hidden lg:block relative w-full h-full min-h-[300px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/admissions_students_banner.png"
                alt="Students of IREAD ALPHA in school uniform"
                className="w-full h-full object-cover object-center rounded-r-[24px] md:rounded-r-[32px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>


      {/* Main Footer — wave rise-up with staggered columns */}
      <div className="px-5 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <motion.img
                src="/logo.png"
                alt="IREAD ALPHA"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3
                  className="text-xl md:text-2xl font-bold"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  IREAD ALPHA
                </h3>
                <p className="text-white/50 text-[10px] tracking-[1px] uppercase">
                  English Medium High School
                </p>
              </div>
            </div>

            <p className="text-white/70 leading-7 text-sm md:text-base">
              Building strong foundations through quality
              education, holistic development and nurturing
              every student&apos;s potential.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-lg md:text-xl font-semibold mb-5 md:mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Quick Links
            </h4>

            <div className="space-y-3">
              {quickLinks.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-white/70 hover:text-[#C89B3C] cursor-pointer transition text-sm md:text-base"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-lg md:text-xl font-semibold mb-5 md:mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Explore
            </h4>

            <div className="space-y-3">
              {exploreLinks.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-white/70 hover:text-[#C89B3C] cursor-pointer transition text-sm md:text-base"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-lg md:text-xl font-semibold mb-5 md:mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Contact Us
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C89B3C] mt-1 shrink-0" />
                <p className="text-white/70 text-sm md:text-base leading-6">
                  9/185-4, Shahipet, Alpha Nagar,
                  <br />
                  Saipet, Guduru,
                  <br />
                  Andhra Pradesh — 516003
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#C89B3C] shrink-0" />
                <a href="tel:+919344167840" className="text-white/70">
                  +91 93441 67840
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#C89B3C] shrink-0" />
                <a href="mailto:info@ireadalpha.edu" className="text-white/70 ">
                  info@ireadalpha.edu
                </a>
              </div>
            </div>

            {/* Google Maps CTA */}
            <motion.a
              href="https://share.google/nik0wr5rePc3AQBxB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-[#C89B3C] hover:text-[#D4AD5A] transition text-sm font-medium"
              whileHover={{ x: 5 }}
            >
              <MapPin size={14} />
              <span>View on Google Maps →</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 mt-12 md:mt-16 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-white/50 text-sm">
            © 2026 IREAD ALPHA English Medium High School. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-white/50 text-sm">
            <motion.p
              className="hover:text-white cursor-pointer transition"
            >
              Privacy Policy
            </motion.p>
            <motion.p
              className="hover:text-white cursor-pointer transition"
            >
              Terms & Conditions
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
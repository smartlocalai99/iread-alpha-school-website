import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ isReady }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Programs", href: "#programs" },
    { label: "Facilities", href: "#facilities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    setMobileOpen(false);
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
    <>
      <motion.header
        initial={{ y: -120, opacity: 0 }}
        animate={isReady ? { y: 0, opacity: 1 } : { y: -120, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
        }`}
      >
        <div className="max-w-[1450px] mx-auto h-[80px] md:h-[90px] px-5 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.png"
              alt="IREAD ALPHA Logo"
              className="w-11 h-11 md:w-14 md:h-14 object-contain"
            />
            <div>
              <h1
                className="text-[20px] md:text-[24px] font-bold text-[#0B2148] leading-none"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                IREAD ALPHA
              </h1>
              <p className="text-[9px] md:text-[11px] tracking-[1px] text-gray-500 mt-1">
                ENGLISH MEDIUM HIGH SCHOOL
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[15px] font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-gray-700 hover:text-[#0B2148] transition duration-300 group cursor-pointer"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1.5 h-[2px] w-0 bg-[#C89B3C] rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#admissions"
              onClick={(e) => handleNavClick(e, "#admissions")}
              className="bg-[#052A63] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#0B2148] transition duration-300 cursor-pointer"
            >
              Admissions Open
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="border border-[#C89B3C] text-[#C89B3C] px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#C89B3C] hover:text-white transition duration-300 cursor-pointer"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#0B2148]"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-Out Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 w-[300px] sm:w-[340px] h-full bg-white shadow-2xl lg:hidden flex flex-col"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="" className="w-10 h-10 object-contain" />
                  <span className="font-bold text-[#0B2148] text-lg" style={{ fontFamily: "var(--font-serif)" }}>
                    IREAD ALPHA
                  </span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="text-gray-500">
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="flex-1 px-6 py-6 overflow-y-auto">
                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="block px-4 py-3.5 text-[16px] font-medium text-gray-700 hover:text-[#0B2148] hover:bg-[#FBFAF7] rounded-xl transition duration-200"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </nav>

              {/* Mobile Buttons */}
              <div className="px-6 py-6 border-t border-gray-100 space-y-3">
                <a
                  href="#admissions"
                  onClick={(e) => handleNavClick(e, "#admissions")}
                  className="block w-full text-center bg-[#052A63] text-white py-3.5 rounded-xl font-medium hover:bg-[#0B2148] transition"
                >
                  Admissions Open
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="block w-full text-center border border-[#C89B3C] text-[#C89B3C] py-3.5 rounded-xl font-medium hover:bg-[#C89B3C] hover:text-white transition"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
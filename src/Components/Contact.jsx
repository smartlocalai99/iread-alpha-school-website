import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "./useGsap";

export default function ContactSection() {
  const headingRef = useRef(null);

  // GSAP heading reveal
  useEffect(() => {
    if (typeof window === "undefined" || !headingRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const el = headingRef.current;
    const text = el.textContent;
    el.innerHTML = "";
    el.style.visibility = "visible";

    const chars = text.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(40px)";
      el.appendChild(span);
      return span;
    });

    const ctx = gsap.context(() => {
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-8 md:pt-20 md:pb-10 lg:pt-24 lg:pb-12">

      <div className="text-center mb-12 md:mb-16">
        <motion.div
          className="flex justify-center items-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-10 h-[2px] bg-[#C89B3C]"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="text-[#C89B3C] uppercase tracking-[4px] font-semibold text-sm">
            Contact Us
          </p>
          <motion.div
            className="w-10 h-[2px] bg-[#C89B3C]"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        {/* GSAP character reveal heading */}
        <h2
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#0B1F45]"
          style={{ fontFamily: "var(--font-serif)", visibility: "hidden" }}
        >
          Visit Our Campus
        </h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mt-5 leading-7 md:leading-8 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We welcome parents and students to visit our campus,
          explore our facilities and experience the IREAD ALPHA
          learning environment.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 md:gap-8">

        {/* LEFT — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            type: "spring",
            stiffness: 60,
            damping: 12,
          }}
          className="bg-[#0B1F45] rounded-[28px] md:rounded-[35px] p-7 sm:p-8 md:p-10 text-white flex flex-col justify-between h-full"
        >
          <div>
            <motion.h3
              className="text-2xl md:text-3xl mb-8 md:mb-10"
              style={{ fontFamily: "var(--font-serif)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Contact Information
            </motion.h3>

            <div className="space-y-6 md:space-y-8">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  content: (
                    <p className="text-white/80 leading-7 text-sm md:text-base">
                      9/185-4, Shahipet,
                      <br />
                      Alpha Nagar, Saipet,
                      <br />
                      Guduru, Andhra Pradesh
                      <br />
                      516003
                    </p>
                  ),
                },
                {
                  icon: Phone,
                  label: "Phone",
                  content: (
                    <a href="tel:+919344167840" className="text-white/80 hover:text-[#C89B3C] transition text-sm md:text-base">
                      +91 93441 67840
                    </a>
                  ),
                },
                {
                  icon: Mail,
                  label: "Email",
                  content: (
                    <a href="mailto:info@ireadalpha.edu" className="text-white/80 hover:text-[#C89B3C] transition text-sm md:text-base break-all">
                      info@ireadalpha.edu
                    </a>
                  ),
                },
                {
                  icon: Clock,
                  label: "Working Hours",
                  content: (
                    <p className="text-white/80 text-sm md:text-base">
                      Monday — Saturday
                      <br />
                      8:00 AM — 4:00 PM
                    </p>
                  ),
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.12,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <motion.div
                      className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#C89B3C]/15 flex items-center justify-center shrink-0 mt-0.5"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon size={18} className="text-[#C89B3C]" />
                    </motion.div>
                    <div>
                      <p className="text-[#C89B3C] uppercase tracking-[3px] text-xs mb-2 font-semibold">
                        {item.label}
                      </p>
                      {item.content}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 space-y-6">
            {/* Google Maps Link */}
            <motion.a
              href="https://share.google/nik0wr5rePc3AQBxB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#C89B3C] hover:text-[#D4AD5A] transition text-sm font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              whileHover={{ x: 5 }}
            >
              <MapPin size={16} />
              <span>Open in Google Maps →</span>
            </motion.a>

            {/* Creative Panel: Visitor Notice & Safety Protocol */}
            <motion.div
              className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <h4 className="text-[#C89B3C] uppercase tracking-[2px] text-[11px] font-bold mb-2">
                Visitor Guidelines
              </h4>
              <ul className="space-y-2 text-xs text-white/70 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#C89B3C] font-bold">•</span>
                  <span>Prior appointments are required for meeting school administrators.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C89B3C] font-bold">•</span>
                  <span>All guests must register at the reception with a valid photo ID.</span>
                </li>
              </ul>
            </motion.div>

            {/* School Logo Watermark */}
            <motion.div
              className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-2xl p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 0.9, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
            >
              <img
                src="/logo.png"
                alt="IREAD ALPHA Logo"
                className="w-16 h-16 object-contain filter brightness-110"
              />
              <div>
                <h4
                  className="text-base font-bold tracking-wider text-[#C89B3C]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  IREAD ALPHA
                </h4>
                <p className="text-[10px] tracking-[1.5px] text-white/50 uppercase mt-0.5">
                  English Medium High School
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT — cascading panels */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          {/* School Location Image */}
          <motion.div
            className="overflow-hidden rounded-[28px] md:rounded-[35px] border border-gray-100 shadow-sm aspect-[16/9] group"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 80 }}
          >
            <img
              src="/school-location.png"
              alt="IREAD ALPHA E.M. High School — Shahipet, Guduru, Andhra Pradesh"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
            />
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            className="overflow-hidden rounded-[28px] md:rounded-[35px] border border-gray-100 shadow-sm h-[200px] sm:h-[240px] md:h-[260px]"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 80 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.8560456037794!2d78.8166756!3d14.4929521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb371f2dbffff99%3A0x4746925333e5b711!2sAlfa%20E.M.%26islamic%20High%20School!5e0!3m2!1sen!2sin!4v1780752747740!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IREAD ALPHA School Location — Shahipet, Guduru, AP"
            />
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            className="bg-white border border-gray-100 rounded-[28px] md:rounded-[35px] p-6 sm:p-8 md:p-10 shadow-sm"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7, type: "spring", stiffness: 80 }}
          >
            <h3
              className="text-xl md:text-2xl lg:text-3xl text-[#0B1F45] mb-6 md:mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Admission Enquiry
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {["Parent Name", "Phone Number", "Email", "Child's Grade"].map((placeholder, i) => (
                <motion.input
                  key={placeholder}
                  type={placeholder === "Email" ? "email" : placeholder === "Phone Number" ? "tel" : "text"}
                  placeholder={placeholder}
                  className="border border-gray-200 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#C89B3C] focus:shadow-[0_0_0_3px_rgba(200,155,60,0.1)] transition-all duration-300 text-sm md:text-base w-full"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                />
              ))}
            </div>

            <motion.textarea
              rows={4}
              placeholder="Message"
              className="w-full border border-gray-200 rounded-xl px-4 md:px-5 py-3 md:py-4 mt-4 md:mt-5 outline-none focus:border-[#C89B3C] focus:shadow-[0_0_0_3px_rgba(200,155,60,0.1)] transition-all duration-300 resize-none text-sm md:text-base"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            />

            <motion.button
              className="mt-5 md:mt-6 bg-[#052A63] text-white px-7 md:px-8 py-3 md:py-4 rounded-xl font-medium hover:bg-[#0B2148] hover:shadow-lg transition-all duration-300 text-sm md:text-base"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3 }}
            >
              Send Enquiry
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
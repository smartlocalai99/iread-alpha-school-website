import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 md:mb-16"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#C89B3C]" />
          <p className="text-[#C89B3C] uppercase tracking-[4px] font-semibold text-sm">
            Contact Us
          </p>
          <div className="w-10 h-[2px] bg-[#C89B3C]" />
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#0B1F45]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Visit Our Campus
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-5 leading-7 md:leading-8 text-sm md:text-base">
          We welcome parents and students to visit our campus,
          explore our facilities and experience the IREAD ALPHA
          learning environment.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 md:gap-8">

        {/* LEFT — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-[#0B1F45] rounded-[28px] md:rounded-[35px] p-7 sm:p-8 md:p-10 text-white"
        >
          <h3
            className="text-2xl md:text-3xl mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Contact Information
          </h3>

          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#C89B3C]/15 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={18} className="text-[#C89B3C]" />
              </div>
              <div>
                <p className="text-[#C89B3C] uppercase tracking-[3px] text-xs mb-2 font-semibold">
                  Address
                </p>
                <p className="text-white/80 leading-7 text-sm md:text-base">
                  9/185-4, Shahipet,
                  <br />
                  Alpha Nagar, Saipet,
                  <br />
                  Guduru, Andhra Pradesh
                  <br />
                  516003
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#C89B3C]/15 flex items-center justify-center shrink-0 mt-0.5">
                <Phone size={18} className="text-[#C89B3C]" />
              </div>
              <div>
                <p className="text-[#C89B3C] uppercase tracking-[3px] text-xs mb-2 font-semibold">
                  Phone
                </p>
                <a href="tel:+919344167840" className="text-white/80 hover:text-[#C89B3C] transition text-sm md:text-base">
                  +91 93441 67840
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#C89B3C]/15 flex items-center justify-center shrink-0 mt-0.5">
                <Mail size={18} className="text-[#C89B3C]" />
              </div>
              <div>
                <p className="text-[#C89B3C] uppercase tracking-[3px] text-xs mb-2 font-semibold">
                  Email
                </p>
                <a href="mailto:info@ireadalpha.edu" className="text-white/80 hover:text-[#C89B3C] transition text-sm md:text-base break-all">
                  info@ireadalpha.edu
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#C89B3C]/15 flex items-center justify-center shrink-0 mt-0.5">
                <Clock size={18} className="text-[#C89B3C]" />
              </div>
              <div>
                <p className="text-[#C89B3C] uppercase tracking-[3px] text-xs mb-2 font-semibold">
                  Working Hours
                </p>
                <p className="text-white/80 text-sm md:text-base">
                  Monday — Saturday
                  <br />
                  8:00 AM — 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps Link */}
          <a
            href="https://share.google/nik0wr5rePc3AQBxB"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 md:mt-10 flex items-center gap-2 text-[#C89B3C] hover:text-[#D4AD5A] transition text-sm font-medium"
          >
            <MapPin size={16} />
            <span>Open in Google Maps →</span>
          </a>
        </motion.div>

        {/* RIGHT — Map + Enquiry */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          {/* School Location Image */}
          <div className="overflow-hidden rounded-[28px] md:rounded-[35px] border border-gray-100 shadow-sm aspect-[16/9]">
            <img
              src="/school-location.png"
              alt="IREAD ALPHA E.M. High School — Shahipet, Guduru, Andhra Pradesh"
              className="w-full h-full object-cover object-center hover:scale-105 transition duration-700"
            />
          </div>

          {/* Google Maps Embed */}
          <div className="overflow-hidden rounded-[28px] md:rounded-[35px] border border-gray-100 shadow-sm h-[200px] sm:h-[240px] md:h-[260px]">
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
          </div>

          {/* Enquiry Form */}
          <div className="bg-white border border-gray-100 rounded-[28px] md:rounded-[35px] p-6 sm:p-8 md:p-10 shadow-sm">
            <h3
              className="text-xl md:text-2xl lg:text-3xl text-[#0B1F45] mb-6 md:mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Admission Enquiry
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              <input
                type="text"
                placeholder="Parent Name"
                className="border border-gray-200 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#C89B3C] transition text-sm md:text-base"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-200 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#C89B3C] transition text-sm md:text-base"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-200 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#C89B3C] transition text-sm md:text-base"
              />
              <input
                type="text"
                placeholder="Child's Grade"
                className="border border-gray-200 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#C89B3C] transition text-sm md:text-base"
              />
            </div>

            <textarea
              rows={4}
              placeholder="Message"
              className="w-full border border-gray-200 rounded-xl px-4 md:px-5 py-3 md:py-4 mt-4 md:mt-5 outline-none focus:border-[#C89B3C] transition resize-none text-sm md:text-base"
            />

            <button className="mt-5 md:mt-6 bg-[#052A63] text-white px-7 md:px-8 py-3 md:py-4 rounded-xl font-medium hover:bg-[#0B2148] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm md:text-base">
              Send Enquiry
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import profilePic from "../assets/lade_1.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden pt-24 md:pt-0">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/5 blur-3xl rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-500/5 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-orange-500 font-semibold uppercase tracking-widest mb-4">
              Full Stack Web Developer
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm
              <span className="block text-orange-500">Yetunde Solanke</span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
              I build modern websites and full-stack web applications that help
              businesses improve their online presence, attract customers, and
              grow digitally.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl transition"
              >
                View Projects
              </a>

              <a
                href="/Yetunde-Solanke-CV-1.pdf"
                download
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl transition"
              >
                Download CV
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-8 text-slate-300">
              <a
                href="https://github.com/Oluremi37"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={28}
                  className="hover:text-orange-500 hover:scale-110 transition cursor-pointer"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/solanke-yetunde-omolade-7a4476276"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={28}
                  className="hover:text-orange-500 hover:scale-110 transition cursor-pointer"
                />
              </a>

              <div className="relative group">
                <FaEnvelope
                  size={28}
                  onClick={scrollToContact}
                  className="hover:text-orange-500 hover:scale-110 cursor-pointer transition"
                />

                <div className="absolute -top-11 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                  Send me a message
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <img
                src={profilePic}
                alt="Yetunde Solanke"
                className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-2 border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.25)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

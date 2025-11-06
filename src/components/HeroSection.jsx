import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import avatar from "../assets/hero.png";

const roles = [
  "Full Stack Developer",
  "DevOps Engineer",
  "n8n Automation Engineer",
];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const section = document.getElementById("about");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="
        min-h-screen flex flex-col md:flex-row 
        items-center justify-center 
        bg-[#0b0c1a] text-white 
        px-6 sm:px-10 md:px-16 lg:px-24 
        pt-28 md:pt-32
        pb-24 relative overflow-hidden
      "
    >

      <motion.div
        className="relative flex-1 flex justify-center items-center mb-10 md:mb-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute w-[300px] sm:w-[340px] md:w-[380px] h-[300px] sm:h-[340px] md:h-[380px] bg-violet-500/20 blur-[120px] rounded-full"></div>
        <img
          src={avatar}
          alt="Dharani Dharan Avatar"
          className="relative w-48 sm:w-56 md:w-64 lg:w-72 drop-shadow-[0_0_40px_rgba(139,92,246,0.6)] animate-float-fast"
        />
      </motion.div>


      <motion.div
        className="flex-1 text-center md:text-left space-y-3 md:space-y-4 z-10 max-w-lg"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-sm sm:text-base font-bold tracking-wide">
          Hi, I’m <span className="text-violet-400">Dharani</span> Dharan
        </p>

        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug">
          Every Efficient <br />
          <span className="text-white">System Starts With A Strong </span>
          <span className="text-violet-400 decoration-violet-400/50 decoration-4">
            Architectural Mind
          </span>
          <span className="text-white">...</span>
        </h2>

        <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto md:mx-0">
          Because Great Systems Aren’t Built — They’re Architected.
        </p>

   
        <div className="relative h-8 sm:h-10 mt-4">
          <AnimatePresence mode="wait">
            <motion.h3
              key={currentRole}
              className="absolute w-full text-lg sm:text-xl md:text-2xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              I’m A{" "}
              <span className="text-violet-400">{roles[currentRole]}</span>.
            </motion.h3>
          </AnimatePresence>
        </div>

        <p className="text-xs sm:text-sm text-gray-400">
          Open To New{" "}
          <span className="text-violet-400 font-bold">Opportunities</span>.
        </p>

        <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed mt-2">
          Designing Secure Software Architectures And Autonomous Workflows — Powering
          Resilient Cloud And Operations Ecosystems{" "}
          <span className="text-violet-400 font-bold">
            Built For Scale And Performance
          </span>.
        </p>


        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center md:justify-start">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-violet-400 text-black px-6 py-2.5 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
          >
            Connect With Me
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-2.5 rounded-full border border-violet-400 text-violet-400 hover:bg-violet-400/10 hover:scale-105 transition-all duration-300 text-sm sm:text-base font-semibold"
          >
            Take A Look
          </button>
        </div>
      </motion.div>


      <motion.div
        onClick={handleScroll}
        className="
          absolute bottom-8 left-1/2 transform -translate-x-1/2 
          flex flex-col items-center cursor-pointer group z-30
        "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-xs sm:text-sm text-gray-400 mb-2">Scroll</span>
        <div className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center rounded-full bg-violet-400/20 group-hover:bg-violet-400/40 transition-colors duration-300">
          <ArrowDown className="h-4 sm:h-5 w-4 sm:w-5 text-violet-400 group-hover:text-white transition-colors duration-300 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

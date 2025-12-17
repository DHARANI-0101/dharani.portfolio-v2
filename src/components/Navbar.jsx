"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 150;
      let current = "home";

      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el && scrollPos >= el.offsetTop) {
          current = sec;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "about", "skills", "projects", "contact"];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0c1a]/80 backdrop-blur-md border-b border-violet-400/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <div
          className="flex items-center cursor-pointer"
          onClick={() => window.location.reload()} 
        >
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full hover:scale-105 transition-transform duration-300"
          />
        </div>


        <div className="hidden md:flex gap-8 text-white font-medium">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`relative transition-colors duration-300 ${
                activeSection === item
                  ? "text-violet-400"
                  : "text-white hover:text-violet-400"
              } cursor-pointer`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {activeSection === item && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-violet-400 rounded-full"></span>
              )}
            </button>
          ))}
        </div>


        <button
          className="md:hidden text-white focus:outline-none hover:text-violet-400 cursor-pointer transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-20 right-4 w-[85%] sm:w-[60%] md:hidden bg-[#15162b] border border-violet-400/30 rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.3)] backdrop-blur-xl p-8 z-50"
          >
            <h2 className="text-center text-xl font-bold text-violet-400 mb-6">
              NAVIGATIONS
            </h2>

            <ul className="flex flex-col gap-6 text-center text-lg text-white font-medium">
              {navItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <button
                    onClick={() => {
                      scrollToSection(item);
                      setMenuOpen(false);
                    }}
                    className={`block py-2 rounded-lg transition-colors duration-300 w-full ${
                      activeSection === item
                        ? "text-violet-400 bg-violet-400/10"
                        : "text-white hover:text-violet-400 hover:bg-violet-400/10"
                    } cursor-pointer`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </motion.li>
              ))}
            </ul>


            <div className="absolute inset-0 -z-10 pointer-events-none">
              <div className="absolute w-[300px] h-[300px] bg-violet-500/20 blur-[100px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

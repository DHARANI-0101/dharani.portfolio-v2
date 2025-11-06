"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu if open
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 backdrop-blur-md",
        scrollY > 10 ? "bg-[#0b0c1a]/90 shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 sm:px-10 py-4">
        <a href="#home" className="text-2xl font-bold text-violet-400">
          Dharani
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-violet-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <div
          className="md:hidden flex items-center cursor-pointer text-white"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="absolute top-full right-0 mt-2 w-40 bg-[#0b0c1a]/95 backdrop-blur-md rounded-md shadow-lg py-4 flex flex-col gap-4 px-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-white hover:text-violet-400 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

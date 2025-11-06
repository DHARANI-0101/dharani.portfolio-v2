import { Github, Linkedin, Mail } from "lucide-react";
import logo from "../assets/logo.png";

export const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full backdrop-blur-xl bg-[rgb(11,12,26)]/95 border-t border-white/10 shadow-[0_-4px_30px_rgba(0,0,0,0.3)] py-6 px-8 text-sm text-white relative z-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left">


        <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap text-sm">
          <span className="text-white">System Uptime:</span>
          <span className="text-violet-400 font-bold">Active</span>
          <span className="mx-2 text-blue-400">|</span>
          <span className="text-white">Last Deploy:</span>
          <span className="text-violet-400 font-bold">Today</span>
        </div>


        <div className="text-center text-sm text-white flex flex-col items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-12 md:h-16 w-auto mb-2 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => scrollToSection("home")}
          />
          <div className="flex flex-wrap gap-3 mt-1 justify-center">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <button
                key={section}
                className="text-sm text-violet-400 font-semibold cursor-pointer hover:text-white transition-colors"
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)} 
              </button>
            ))}
          </div>
          <span className="mt-1">
            © {new Date().getFullYear()} <span className="text-violet-400 font-bold">Made By Dharani</span>
          </span>
        </div>


        <div className="flex items-center justify-center md:justify-end gap-5">
          <a
            href="mailto:dharanidharan.g2105@gmail.com"
            className="text-xl md:text-2xl font-semibold flex items-center gap-1 hover:text-[#8b5cf6] transition-all duration-300 cursor-pointer"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/dharanidharan-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl font-semibold flex items-center gap-1 hover:text-[#8b5cf6] transition-all duration-300 cursor-pointer"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/DHARANI-0101"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl font-semibold flex items-center gap-1 hover:text-[#8b5cf6] transition-all duration-300 cursor-pointer"
          >
            <Github size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

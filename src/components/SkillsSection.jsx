"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Web Development",
  "DevOps",
  "Programming Languages",
  "CyberSecurity",
];

const skillIcons = {
  C: "/dharani.portfolio-v2/icons/C.svg",
  PHP: "/dharani.portfolio-v2/icons/PHP.svg",
  Python: "/dharani.portfolio-v2/icons/Python.svg",
  Bash: "/dharani.portfolio-v2/icons/Bash.svg",
  Kubernetes: "/dharani.portfolio-v2/icons/Kubernetes.svg",
  AWS: "/dharani.portfolio-v2/icons/AWS.svg",
  Docker: "/dharani.portfolio-v2/icons/Docker.svg",
  Git: "/dharani.portfolio-v2/icons/Git.svg",
  GitHub: "/dharani.portfolio-v2/icons/GitHub.svg",
  Ansible: "/dharani.portfolio-v2/icons/Ansible.svg",
  Jenkins: "/dharani.portfolio-v2/icons/Jenkins.svg",
  n8n: "/dharani.portfolio-v2/icons/n8n.png",
  "HTML5": "/dharani.portfolio-v2/icons/HTML5.svg",
  "CSS3":"/dharani.portfolio-v2/icons/CSS3.svg",
  JavaScript: "/dharani.portfolio-v2/icons/JavaScript.svg",
  jQuery: "/dharani.portfolio-v2/icons/jQuery.svg",
  Bootstrap: "/dharani.portfolio-v2/icons/Bootstrap.svg",
  Node: "/dharani.portfolio-v2/icons/Node.svg",
  Express: "/dharani.portfolio-v2/icons/Express.svg",
  "Embedded JavaScript": "/dharani.portfolio-v2/icons/Ejs.ico",
  "RESTful APIs": "/dharani.portfolio-v2/icons/API.png",
  PostgreSQL: "/dharani.portfolio-v2/icons/PostgreSQL.svg",
  MySQL: "/dharani.portfolio-v2/icons/MySQL.svg",
  MongoDB: "/dharani.portfolio-v2/icons/MongoDB.svg",
  Postman: "/dharani.portfolio-v2/icons/Postman.svg",
  "CTF Development": "/dharani.portfolio-v2/icons/CTF.png",
  GDB: "/dharani.portfolio-v2/icons/GDB.svg",
  Linux: "/dharani.portfolio-v2/icons/Linux.svg",
  Metasploit: "/dharani.portfolio-v2/icons/Metasploit.svg",
  BurpSuite: "/dharani.portfolio-v2/icons/Burp.svg",
  "Parrot OS": "/dharani.portfolio-v2/icons/ParrotOS.svg",
  "Kali Linux": "/dharani.portfolio-v2/icons/Kali.svg",
  Nmap: "/dharani.portfolio-v2/icons/Nmap.svg",
  Wireshark: "/dharani.portfolio-v2/icons/Wireshark.svg",
  SIEM: "/dharani.portfolio-v2/icons/SIEM.png",
  "Event Log Analysis": "/dharani.portfolio-v2/icons/Event.svg",
  "Incident Handling": "/dharani.portfolio-v2/icons/Incident.png",
  "ML & LLM OWASP": "/dharani.portfolio-v2/icons/OWASP.svg",
  Enumeration: "/dharani.portfolio-v2/icons/Enumeration.svg",
  "GNU/Linux Standards": "/dharani.portfolio-v2/icons/GNU.svg",
  "SOC Analyst": "/dharani.portfolio-v2/icons/SOC.png",
   GraphQL: "/dharani.portfolio-v2/icons/GraphQL.svg",
   MCP: "/dharani.portfolio-v2/icons/MCP.svg",
   Motoko: "/dharani.portfolio-v2/icons/Motoko.svg",
};


const skills = {
  All: Object.keys(skillIcons),
  "Web Development": [
    "HTML5" ,
    "CSS3",
    "JavaScript",
    "jQuery",
    "Bootstrap",
    "Node",
    "Express",
    "Embedded JavaScript",
    "RESTful APIs",
    "GraphQL",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Postman",
    "Motoko",
    "MCP",
  ],
  DevOps: [
    "Kubernetes",
    "AWS",
    "Docker",
    "Git",
    "GitHub",
    "Ansible",
    "Jenkins",
    "n8n",
  ],
  "Programming Languages": ["C", "PHP", "Python", "Bash"],
  CyberSecurity: [
    "GDB",
    "Linux",
    "Metasploit",
    "BurpSuite",
    "Parrot OS",
    "Kali Linux",
    "Nmap",
    "Wireshark",
    "SIEM",
    "Event Log Analysis",
    "Incident Handling",
    "ML & LLM OWASP",
    "Enumeration",
    "GNU/Linux Standards",
    "SOC Analyst",
    "CTF Development",
  ],
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const displayedSkills = skills[activeCategory].filter(
    (skill) => typeof skill === "string" && skill.length > 0
  );

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.07 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="py-28 px-6 bg-[#0b0c1a] text-white relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          My <span className="text-violet-400">Expertise</span>
        </h2>


        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "min-w-[fit-content] px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 border cursor-pointer truncate",
                activeCategory === category
                  ? "bg-violet-400 text-black border-violet-400 shadow-md shadow-violet-400/40 scale-105"
                  : "bg-transparent text-white border border-violet-500 hover:border-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {displayedSkills.map((skill) => (
            <motion.div
              key={skill}
              variants={cardVariants}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-white/10 to-violet-400/5 border border-violet-400/30 backdrop-blur-xl shadow-[0_0_25px_rgba(139,92,246,0.15)] hover:shadow-[0_0_45px_rgba(139,92,246,0.4)] hover:scale-[1.03] transition-transform duration-500 ease-out"
            >
              <div className="w-16 h-16">
                <img
                  src={
                    skillIcons[skill] ||
                    "https://cdn-icons-png.flaticon.com/512/1087/1087840.png"
                  }
                  alt={skill}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://cdn-icons-png.flaticon.com/512/1087/1087840.png";
                  }}
                  className="w-16 h-16 object-contain rounded-md drop-shadow-[0_0_6px_rgba(139,92,246,0.3)]"
                />
              </div>
              <span className="text-sm font-semibold text-white tracking-wide">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>


      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[65vw] h-[65vw] -translate-x-1/2 -translate-y-1/2 bg-violet-400/10 rounded-full blur-[140px] opacity-40" />
        <div className="absolute bottom-[20%] right-[15%] w-[30vw] h-[30vw] bg-violet-500/10 rounded-full blur-[100px] opacity-30" />
      </div>
    </section>
  );
};

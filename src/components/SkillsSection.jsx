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
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Bash: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  Kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  AWS: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Ansible: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
  Jenkins: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  n8n: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4",
  "HTML & CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  jQuery: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Embedded JavaScript": "https://ejs.co/favicon.ico",
  "RESTful APIs": "https://cdn-icons-png.flaticon.com/512/5548/5548859.png",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  "CTF Development": "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  GDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gcc/gcc-original.svg",
  Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  Metasploit: "https://cdn.simpleicons.org/metasploit/5A5A5A",
  BurpSuite: "https://cdn.simpleicons.org/burpsuite/FF6633",
  "Parrot OS": "https://cdn.simpleicons.org/parrotsecurity/00E676",
  "Kali Linux": "https://cdn.simpleicons.org/kalilinux/2684FF",
  Nmap: "https://nmap.org/images/nmap-project-logo.svg",
  Wireshark: "https://cdn.simpleicons.org/wireshark/1679A7",
  SIEM: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
  "Event Log Analysis": "https://www.svgrepo.com/show/335374/event-log.svg",
  "Incident Handling": "https://static.thenounproject.com/png/2700986-512.png",
  "ML & LLM OWASP": "https://cdn.simpleicons.org/owasp/000000",
  Enumeration: "https://cdn.simpleicons.org/linuxfoundation/0EA0DA",
  "GNU/Linux Standards": "https://cdn.simpleicons.org/gnubash/ffffff",
  "SOC Analyst": "https://cdn-icons-png.flaticon.com/512/2956/2956725.png",
};

const skills = {
  All: Object.keys(skillIcons),
  "Web Development": [
    "HTML & CSS",
    "JavaScript",
    "jQuery",
    "Bootstrap",
    "Node",
    "Express",
    "Embedded JavaScript",
    "RESTful APIs",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Postman",
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


        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer",
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

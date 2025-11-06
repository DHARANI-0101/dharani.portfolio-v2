import { Code, ServerCog, Workflow, Shield } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-violet-400" />,
      title: "Web Development",
      desc: "Engineering scalable, modular web applications leveraging modern front-end frameworks and RESTful architectures, with a focus on performance optimization, responsive design, and maintainable codebases.",
    },
    {
      icon: <ServerCog className="h-8 w-8 text-violet-400" />,
      title: "DevOps Engineering",
      desc: "Implementing robust CI/CD pipelines, automated deployments, and Infrastructure-as-Code practices across cloud-native environments to ensure high availability, observability, and operational efficiency.",
    },
    {
      icon: <Workflow className="h-8 w-8 text-violet-400" />,
      title: "n8n Automation",
      desc: "Orchestrating event-driven workflows and system integrations using enterprise automation tools to optimize business processes, reduce manual overhead, and enable data-driven decision making.",
    },
    {
      icon: <Shield className="h-8 w-8 text-violet-400" />,
      title: "CyberSecurity",
      desc: "Executing proactive vulnerability assessments, threat modeling, and incident response strategies to harden systems, enforce compliance, and implement security-by-design across applications and infrastructure.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 md:py-40 bg-[#0b0c1a] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative flex flex-col items-center text-center">
        
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span className="text-violet-400">Me</span>
        </motion.h2>


        <motion.p
          className="max-w-4xl text-gray-300 text-base md:text-lg leading-relaxed md:leading-loose tracking-wide mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I architect and deploy high-performance web applications and automated DevOps pipelines,
          blending development efficiency with operational resilience. Skilled in cloud-native
          infrastructures, containerization, and workflow automation to streamline complex processes.
          Adept at securing systems through vulnerability analysis, cybersecurity best practices, and
          CTF-driven problem solving. Passionate about translating technical innovation into scalable,
          reliable solutions that drive measurable impact. Continuously exploring emerging technologies
          to optimize performance, enhance security, and accelerate software delivery.
        </motion.p>


        <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-violet-400 text-black font-semibold shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_45px_rgba(139,92,246,0.7)] hover:scale-[1.05] active:scale-[0.98]"
            >
              Connect With Me
            </a>

            <a
              href="/DHARANIDHARAN_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-violet-400 text-violet-400 font-semibold transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.5)] hover:scale-[1.05] active:scale-[0.98]"
            >
              View Resume
            </a>
          </motion.div>

      </div>


      <div className="max-w-6xl mx-auto relative border-l border-violet-400/30 md:border-none">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center mb-20 md:mb-28 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >

            {i !== skills.length - 1 && (
              <div
                className={`absolute hidden md:block w-[2px] bg-gradient-to-b from-violet-400/30 to-transparent h-40 ${
                  i % 2 === 0 ? "right-[50%]" : "left-[50%]"
                } top-full`}
              ></div>
            )}


            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative group w-[90%] sm:w-[85%] md:w-[420px] lg:w-[460px] p-8 md:p-10 rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-400/10 to-transparent backdrop-blur-xl shadow-[0_0_35px_rgba(139,92,246,0.3)] hover:shadow-[0_0_60px_rgba(139,92,246,0.45)] hover:scale-[1.05] transition-all duration-500">
                <div className="flex flex-col items-center text-center">
                  <div className="p-5 mb-5 bg-violet-500/20 border border-violet-400/40 rounded-full shadow-[0_0_25px_rgba(139,92,246,0.6)] group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-violet-400 mb-3">{skill.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{skill.desc}</p>
                </div>
              </div>
            </div>

            <div className="absolute hidden md:block h-5 w-5 bg-violet-400 rounded-full shadow-[0_0_25px_rgba(139,92,246,0.8)] left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-10"></div>
          </motion.div>
        ))}
      </div>


      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[50%] left-[50%] w-[80vw] h-[80vw] -translate-x-1/2 -translate-y-1/2 bg-violet-500/10 rounded-full blur-[130px] opacity-40" />
        <div className="absolute top-[25%] left-[30%] w-[45vw] h-[45vw] -translate-x-1/2 -translate-y-1/2 bg-violet-400/15 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-[20%] right-[20%] w-[30vw] h-[30vw] bg-violet-500/10 rounded-full blur-[90px] opacity-20" />
      </div>
    </section>
  );
};

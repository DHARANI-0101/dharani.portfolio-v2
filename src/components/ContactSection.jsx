import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(import.meta.VITE_SERVICE_ID, import.meta.VITE_TEMPLATE_ID, e.target, import.meta.VITE_PUBLIC_KEY)
      .then(
        () => {
          toast({
            title: "Message Sent 🚀",
            description: "Thanks for reaching out — I’ll get back to you soon!",
            icon: <CheckCircle className="w-5 h-5 text-white" />,
            duration: 5000,
            style: {
              background: "#7c3aed",
              color: "white",
              borderRadius: "12px",
              padding: "12px 20px",
            },
          });
          setIsSubmitting(false);
          e.target.reset();
        },
        () => {
          toast({
            title: "Error ❌",
            description: "Something went wrong! Please check your inputs or try again.",
            icon: <AlertCircle className="w-5 h-5 text-white" />,
            duration: 5000,
            style: {
              background: "#ef4444",
              color: "white",
              borderRadius: "12px",
              padding: "12px 20px",
            },
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="relative py-28 px-6 bg-[#0b0c1a] text-white overflow-hidden">
      <motion.div
        className="container mx-auto max-w-2xl text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Let’s <span className="text-violet-400">Connect</span>
        </motion.h2>

        <motion.p
          className="text-white mb-14 leading-relaxed text-lg max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have A Project, Idea, Or Collaboration In Mind? Let’s Build Something Extraordinary Together.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:shadow-[0_0_35px_rgba(139,92,246,0.35)] transition duration-500 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        >
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-gray-400/70 focus:ring-2 focus:ring-violet-400/50 outline-none transition duration-300"
              placeholder="Enter Your Name"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">EMAIL ID</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-gray-400/70 focus:ring-2 focus:ring-violet-400/50 outline-none transition duration-300"
              placeholder="Enter Your Email Address"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-gray-400/70 focus:ring-2 focus:ring-violet-400/50 outline-none transition duration-300 resize-none"
              placeholder="Hey Dharani, I’d Like To Discuss"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "relative overflow-hidden w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-violet-400 to-violet-500 text-black shadow-md transition-all duration-300 hover:brightness-110 hover:scale-[1.02] cursor-pointer"
            )}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
          </motion.button>
        </motion.form>

        <motion.div
          className="flex justify-center space-x-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {[
            { href: "mailto:dharanidharan.g2105@gmail.com", icon: <Mail /> },
            { href: "https://www.linkedin.com/in/dharanidharan-/", icon: <Linkedin /> },
            { href: "https://github.com/DHARANI-0101", icon: <Github /> },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 text-violet-400 hover:bg-violet-400 hover:text-black transition-transform duration-300 hover:scale-110 backdrop-blur-md border border-white/10"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>


      <motion.div
        className="absolute -z-10 inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-[20%] w-[600px] h-[600px] bg-violet-400/20 rounded-full blur-[120px] opacity-60 animate-pulse"></div>
        <div className="absolute right-1/4 bottom-[10%] w-[400px] h-[400px] bg-violet-400/10 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
      </motion.div>
    </section>
  );
};

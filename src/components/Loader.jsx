import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const firstPart = "dharani.".split("");
  const secondPart = "PORTFOLIO".split("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0b0c1a] z-50">
      <h1 className="flex text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest">
        
        {firstPart.map((letter, index) => (
          <motion.span
            key={`first-${index}`}
            initial={{ y: -50, opacity: 0, rotate: -10 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ delay: index * 0.08, type: "spring", stiffness: 300 }}
            className="inline-block text-white"
          >
            {letter}
          </motion.span>
        ))}

        
        {secondPart.map((letter, index) => (
          <motion.span
            key={`second-${index}`}
            initial={{ y: -50, opacity: 0, rotate: -10 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ delay: (firstPart.length + index) * 0.08, type: "spring", stiffness: 300 }}
            className="inline-block text-violet-400"
          >
            {letter}
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default Loader;

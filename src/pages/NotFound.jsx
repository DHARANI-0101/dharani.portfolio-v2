"use client";

import { motion } from "framer-motion";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b0c1a] text-white px-4 text-center">
      
      <motion.div
        className="bg-white/10 rounded-3xl p-12 mb-6 shadow-lg flex items-center justify-center text-8xl sm:text-[10rem]"
        animate={{
          y: [0, -20, 0], 
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        😹
      </motion.div>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
        Oops! Page Not Found.
      </h2>
      <p className="text-gray-300 mb-6">
        Looks Like This Page Decided To Take A Vacation. 🌴
      </p>
      <a
        href="/dharani.portfolio-v2/"
        className="px-6 py-3 bg-violet-400 text-[#0b0c1a] font-semibold rounded-lg shadow-lg hover:bg-violet-500 transition-all duration-300 cursor-pointer"
      >
        Take Me Home 🚀
      </a>
    </div>
  );
};

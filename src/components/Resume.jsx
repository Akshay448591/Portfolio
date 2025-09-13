import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <section
      id="resume"
      className="w-full bg-gray-900 text-white px-4 sm:px-8 md:px-16 py-20 flex flex-col items-center justify-center"
    >
      {/* Animated Section Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-6"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        Resume
      </motion.h2>

      {/* Single Prompt Line */}
      <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-10 text-center max-w-xl">
        Click below to download my resume
      </p>

      <motion.a
        href="https://drive.google.com/file/d/1oK4ihKK-bkIcMdMgGqlxNYF8god3uxJY/view?usp=drivesdk" // Place your PDF in public folder
        download
        className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 font-medium text-white rounded-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-lg hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download className="w-5 h-5" />
        Download Resume
      </motion.a>
    </section>
  );
}

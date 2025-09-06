// src/components/PortfolioSection.tsx
"use client";

import { motion } from "framer-motion";
import VideoGrid from "./video-grid";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-20 bg-black text-white">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-10 text-cyan-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Portfolio
      </motion.h2>

      {/* Gradient line */}
      <motion.div
        className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-12 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Video Grid */}
      <VideoGrid />

      {/* Explore More Button */}
      <div className="flex justify-center mt-12">
        <motion.a
          href="#"
          className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-xl shadow-lg hover:opacity-90 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Explore More
        </motion.a>
      </div>
    </section>
  );
};

export default PortfolioSection;

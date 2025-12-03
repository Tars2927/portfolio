"use client";

import { motion } from "framer-motion";

export default function OverlayIntro() {
  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-40">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          HELLO, THIS IS TARS
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1 }}
          className="mt-4 text-gray-300"
        >
          Welcome to my world.
        </motion.p>
      </motion.div>
    </div>
  );
}

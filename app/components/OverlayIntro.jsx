"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OverlayIntro() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const fadeAt = 250;
      setOpacity(Math.max(0, 1 - scroll / fadeAt));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none flex items-center justify-center z-40"
      animate={{ opacity }}
      transition={{ duration: 0 }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">Hello, I'm Tars</h1>
        <p className="text-xl mt-4 text-gray-300">Welcome to my world.</p>
      </div>
    </motion.div>
  );
}

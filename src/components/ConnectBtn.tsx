"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ConnectBtn = () => {
  const [isWiggling, setIsWiggling] = useState(false);
  return (
    <motion.a
      href="https://www.linkedin.com/in/sarbajit-chaki/"
      target="__blank"
      className="inline-flex items-center gap-x-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.25 }}
      onHoverStart={() => setIsWiggling(true)}
      onHoverEnd={() => setIsWiggling(false)}
    >
      <motion.span
        className="text-xl"
        animate={isWiggling ? { rotate: [0, 15, -15, 15, -15, 0] } : { rotate: 0 }}
        transition={{ duration: 0.5 }}
      >
        👋
      </motion.span>
      <span className="font-semibold">Let&apos;s Connect</span>
    </motion.a>
  );
};

export default ConnectBtn;

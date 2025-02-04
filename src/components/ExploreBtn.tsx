"use client";

import ArrowDown from "@/assets/icons/arrow-down.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const ExploreBtn = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.button
      className="inline-flex items-center gap-x-2 border border-white/15 px-6 h-12 rounded-xl"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      <a href="#projects" className="font-semibold">
        Explore My Work
      </a>
      <motion.div
        animate={isHovering ? { y: [0, 5, 0] } : { y: 0 }}
        transition={{
          duration: 0.6,
          repeat: isHovering ? Infinity : 0,
        }}
        className="flex items-center"
      >
        <ArrowDown className="size-4" />
      </motion.div>
    </motion.button>
  );
};

export default ExploreBtn;

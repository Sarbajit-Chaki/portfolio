"use client";

import { motion } from "framer-motion";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";

const LiveSiteBtn = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
    >
      <span>Visit Live Site</span>
      <ArrowIcon className="size-4" />
    </motion.button>
  );
};

export default LiveSiteBtn;

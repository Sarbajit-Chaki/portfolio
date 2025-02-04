"use client";

import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NextIcon from "@/assets/icons/next-js-svgrepo-com.svg";
import ToolboxItems from "@/components/ToolboxItems";
import MapImage from "@/assets/images/map-image.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Next JS",
    iconType: NextIcon,
  },
];

const hobbies = [
  {
    title: "Movies",
    emoji: "🎦",
    left: "40%",
    top: "58%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "35%",
    top: "20%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "68%",
    top: "5%",
  },
  {
    title: "Magic",
    emoji: "🪄",
    left: "1%",
    top: "50%",
  },
  {
    title: "Coding",
    emoji: "🧑🏻‍💻",
    left: "56%",
    top: "34%",
  },
  {
    title: "Chess",
    emoji: "♟️",
    left: "1%",
    top: "10%",
  },
];

const locationInfo = "https://www.google.com/maps/place/Jalpaiguri,+West+Bengal/@26.5382481,88.6616518,11868m/data=!3m1!1e3!4m6!3m5!1s0x39e4795a4544dc7b:0xfd44f1fea54c9c40!8m2!3d26.5214579!4d88.7195567!16zL20vMDZ0Y3dt?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D";

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section className="py-20" id="about">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            About Me
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          A Glimpse Into My World
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          Learn more about who I am, what I do, and what inspires me.
        </p>
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="bg-gray-800 rounded-3xl relative overflow-hidden border-2 border-white/20 p-6 h-[320px] md:col-span-2">
              <div className="flex flex-col">
                <div className="inline-flex gap-2 items-center">
                  <StarIcon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl">My Reads</h3>
                </div>
                <p className="text-sm md:text-base text-white/60 mt-2">
                  Explore the books shaping my perspectives.
                </p>
              </div>
              <div className="w-40 mx-auto mt-8">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </div>
            <div className="bg-gray-800 rounded-3xl relative overflow-hidden border-2 border-white/20 h-[320px] md:col-span-3">
              <div className="flex flex-col px-6 pt-6">
                <div className="inline-flex gap-2 items-center">
                  <StarIcon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl">My Toolbox</h3>
                </div>
                <p className="text-sm md:text-base text-white/60 mt-2">
                  Explore the technologies and tools I use to create exceptional
                  digital experiences.
                </p>
              </div>
              <ToolboxItems
                toolboxItems={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-left"
              />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="bg-gray-800 rounded-3xl relative overflow-hidden border-2 border-white/20 h-[320px] flex flex-col md:col-span-3">
              <div className="px-6 py-6">
                <div className="inline-flex gap-2 items-center">
                  <StarIcon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl">Beyond the Code</h3>
                </div>
                <p className="text-sm md:text-base text-white/60 mt-2">
                  Explore my interests and hobbies beyond the digital realm.
                </p>
              </div>
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="text-gray-950 font-medium">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div onClick={()=>{window.open(locationInfo)}} className="bg-gray-800 hover:cursor-pointer rounded-3xl relative overflow-hidden border-2 border-white/20 h-[320px] md:col-span-2">
              <Image
                src={MapImage}
                alt="Map Image"
                className="h-full w-full object-cover z-0"
              />
              <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full ">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 border-2 border-sky-500 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 border-2 border-sky-500 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="Smile Memoji"
                  className="size-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

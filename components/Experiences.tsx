"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiencesData } from "../data/experienceData";

function Experiences() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-start md:justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 mb-10 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
        Experiences
      </h3>

      <div className="mt-20 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-[#0AABF7]/50">
        {experiencesData.map((project, index) => {
          return <ExperienceCard key={index} {...project} />;
        })}
      </div>
    </motion.div>
  );
}

export default Experiences;

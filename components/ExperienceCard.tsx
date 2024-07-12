"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ExperienceCardProps {
  position: string;
  business: string;
  tech: string;
  functions: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  position,
  business,
  tech,
  functions,
}) => {
  return (
    <article
      className="h-screen flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] 
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src="/me.jpg"
        alt="Me"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{position}</h4>
        <p className="font-bold text-2xl mt-1"> {business}</p>
        <div className="flex space-x-2 my-2">
          {/** Skills TO DO */}
          <Image
            priority={true}
            src="/me.jpg"
            alt=""
            width={100}
            height={100}
            className="h-10 w-10 rounded-full"
          />
          <Image
            priority={true}
            src="/me.jpg"
            alt=""
            width={100}
            height={100}
            className="h-10 w-10 rounded-full"
          />
          <Image
            priority={true}
            src="/me.jpg"
            alt=""
            width={100}
            height={100}
            className="h-10 w-10 rounded-full"
          />
        </div>

        <p className="uppercase py-5 text-gray-300"> Start work .. - end</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>{functions}</li>
          <li>{functions}</li>
          <li>{functions}</li>
          <li>{functions}</li>
          <li>{functions}</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

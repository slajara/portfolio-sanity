"use client";
import { motion } from "framer-motion";

function Projects() {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col overflow-hidden text-left md:text-row xl:flex-row max-w-full 
  justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-2 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="/me.jpg"
              alt="Me"
              className="relative rounded-full h-32 w-32 mx-auto object-cover"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {" "}
                <span className="underline decoration-[#0AABF7]/50">
                  Case Study {index + 1} of {projects.length}
                </span>{" "}
                Name Project
              </h4>

              <p className="text-lg text-center md:text-left">
                {" "}
                project description project description project description
                project description project description project description
                project description project description project description
                project description project description project description
                project description project description project description{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#0AABF7]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faTailwindCss,
  faFigma,
  faOpenai,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  faReact,
  faNodeJs,
  faDatabase,
  faTailwindCss,
  faFigma,
  faOpenai,
];

export default function Home() {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center text-center"
    >
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      >
        {" "}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary mb-3">
          <span className="text-green font-extrabold">WEB</span> DEVELOPER
        </h1>
        <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto mb-6">
          from Algeria, passionate about building modern and scalable web
          applications. I focus on clean design, performance, and delivering
          smooth user experiences.
        </p>
        <div className="text-xs sm:text-sm text-violet mb-8 font-medium">
          +4 Years Experience
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {skills.map((icon, i) => (
            <div
              key={i}
              className="
                text-xl sm:text-2xl
                text-text-secondary

              "
            >
              <FontAwesomeIcon icon={icon} />
            </div>
          ))}
        </div>
        <a
          href="#Projects"
          className="
          w-fit
          mt-8
          mx-auto
            text-sm sm:text-base
            cursor-pointer
              group relative flex items-center justify-center gap-2
              p-4 rounded-2xl
              bg-white/10 backdrop-blur-lg
              border border-white/20
              shadow-lg
              transition-all duration-300
              hover:scale-[1.02] hover:shadow-xl
            "
        >
          <span className="font-medium">View My Work</span>

          <span className="text-violet transition-transform duration-300  group-hover:translate-y-1 ">
            <ArrowDown size={20} />
          </span>
        </a>
      </motion.div>
    </section>
  );
}

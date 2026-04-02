import React from "react";
import project1 from "../assets/ProjectOne.png";
import project2 from "../assets/ProjectTwo.png";
import project3 from "../assets/ProjectThree.png";
import project4 from "../assets/ProjectFour.png";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Lusso",
    desc: "Ecommerce Website",
    image: project1,
    link: "https://lussoparfums-dz.com",
  },
  {
    title: "Bloom",
    desc: "Restaurant Website",
    image: project2,
    link: "https://bloom-restaurant.vercel.app",
  },
  {
    title: "MahmoudBen",
    desc: "Video Editor Portfolio",
    image: project3,
    link: "https://mahmoudben.com",
  },
  {
    title: "Gueddouda Center",
    desc: "Cleaning Company Website",
    image: project4,
    link: "https://gueddoudacenter.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="Projects"
      className="min-h-screen py-20 flex width-full flex-col justify-center items-center"
    >
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4">
          Recent Projects
        </h2>

        {/* Paragraph */}
        <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto text-center mb-12">
          A selection of my latest projects, blending creativity with real-world
          functionality.
        </p>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 w-full max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              className="
          cursor-pointer
          group relative flex items-center gap-4
          p-4 rounded-2xl
          bg-white/10 backdrop-blur-lg
          border border-white/20
          shadow-lg
          transition-all duration-300
          hover:scale-[1.02] hover:shadow-xl
        "
            >
              <div className="w-20 h-20 md:w-30 md:h-30 min-w-20 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-text-primary">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary">{project.desc}</p>
              </div>

              <div className="absolute right-4 text-violet transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={20} />
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

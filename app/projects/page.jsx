"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import projects from "@lib/projects";
import Navbar from "@components/Navbar";
import Title from "@components/TitleWF";
import { montserrat } from "@lib/font";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-24 py-36 bg-[#fdfdfd] text-[#222]">
        <Title title="Our Projects" underline />
        {/* <Subtitle subtitle="Explore our diverse range of projects, from modern homes to commercial spaces." /> */}

        {/* Filter Buttons */}
        {/* <div className="flex justify-center mb-10 space-x-4 mt-20">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            All Projects
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
            Completed
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
            Under Construction
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
            Smart Homes
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
            Commercial Projects
          </button>
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-20">
          {projects.map((project, idx) => (
            <Link href={`/project/${project.slug}`} key={idx}>
              <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-[280px]">
                {/* Static Image */}
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Container */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Dark Overlay - Appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content Container - Slides up from bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]">
                    <motion.h3
                      initial={{ opacity: 0, x: -200 }} // Starts off-screen to the left
                      whileInView={{
                        opacity: 1,
                        x: 0, // Ends at the normal position
                        transition: {
                          delay: 0.25,
                          duration: 0.4,
                        },
                      }}
                      className={`text-2xl ${montserrat.className}  font-medium mb-2`}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-sm text-gray-200 mb-4">
                      {project.description}
                    </p>
                    <button className="px-4 py-2 bg-[var(--color-primary2)] cursor-pointer text-white text-sm rounded hover:bg-opacity-90 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@components/Navbar";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";

export default function projects() {
  const [projects, setProjects] = useState([
    {
      slug: "modern-10-marla",
      title: "Modern 10 Marla House",
      image: "/projects/1.jpg",
      location: "Islamabad",
      size: "10 Marla",
      status: "Completed",
    },
    {
      slug: "smart-7-marla",
      title: "7 Marla Smart Home",
      image: "/projects/2.jpg",
      location: "G-13, Islamabad",
      size: "7 Marla",
      status: "Under Construction",
    },
  ]);
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-24 py-36 bg-[#fdfdfd] text-[#222]">
        <Title title="Our Projects" underline classes="" />
        {/* <Subtitle subtitle="Explore our diverse range of projects, from modern homes to commercial spaces." /> */}

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10 space-x-4 mt-20">
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
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects?.map((project, idx) => (
            <motion.div
              key={project.slug}
              className="relative group overflow-hidden rounded-xl shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover overlay */}
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent text-white p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm">
                    📍 {project.location} | 📐 {project.size} | 🚧{" "}
                    {project.status}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

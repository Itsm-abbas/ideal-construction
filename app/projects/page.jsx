"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import projects from "@lib/projects";
import Navbar from "@components/Navbar";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";
import { montserrat, poppins, roboto } from "@lib/font";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaExpand,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Projects() {
  const categories = [...new Set(projects.map((project) => project.category))];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-mint/10 pt-24">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className={`text-sm font-medium ${poppins.className}`}>
                  Our Portfolio
                </span>
              </div>

              <Title title="Our Projects" shadow={true} gradient={true} />

              <Subtitle subtitle="Discover our portfolio of exceptional construction projects, each built with Islamic values and quality craftsmanship." />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed ${roboto.className}`}
              >
                From residential homes to commercial complexes, every project
                reflects our commitment to excellence, trust, and client
                satisfaction.
              </motion.p>

              {/* Project Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-8 mt-12"
              >
                {[
                  { number: "50+", label: "Projects Completed" },
                  { number: "100%", label: "Client Satisfaction" },
                  { number: "5+", label: "Years Experience" },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div
                      className={`text-3xl font-bold text-primary ${montserrat.className}`}
                    >
                      {stat.number}
                    </div>
                    <div
                      className={`text-gray-600 text-sm ${poppins.className}`}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: idx * 0.1,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <Link href={`/project/${project.slug}`}>
                    <motion.div
                      className="group relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/80 hover:border-accent/20 overflow-hidden"
                      whileHover="hover"
                    >
                      {/* Background Gradient on Hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white to-mint/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        variants={{
                          hover: { opacity: 1 },
                        }}
                      />

                      {/* Accent Border Top */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-teal transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                      {/* Project Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          src={project.images[0]}
                          alt={project.title}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Project Category Badge */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                          <span
                            className={`text-xs font-semibold text-primary ${poppins.className}`}
                          >
                            {project.category}
                          </span>
                        </div>

                        {/* View Icon */}
                        <motion.div
                          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <FaExpand size={14} />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 p-6">
                        {/* Location and Date */}
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                          {project.location && (
                            <div className="flex items-center gap-1">
                              <FaMapMarkerAlt size={12} />
                              <span className={roboto.className}>
                                {project.location}
                              </span>
                            </div>
                          )}
                          {project.date && (
                            <div className="flex items-center gap-1">
                              <FaCalendarAlt size={12} />
                              <span className={roboto.className}>
                                {project.date}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Title */}
                        <motion.h3
                          className={`text-xl font-bold text-primary mb-3 ${montserrat.className} group-hover:text-primary/90 transition-colors duration-300`}
                        >
                          {project.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                          className={`text-gray-600 leading-relaxed mb-4 line-clamp-2 ${roboto.className}`}
                        >
                          {project.description}
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                          className="flex items-center justify-between pt-4 border-t border-gray-200/30 group-hover:border-accent/20 transition-colors duration-300"
                          whileHover="hover"
                        >
                          <span
                            className={`text-accent font-semibold text-sm uppercase tracking-wide group-hover:text-accent/80 transition-colors duration-300 ${poppins.className}`}
                          >
                            View Project
                          </span>
                          <motion.div
                            variants={{
                              hover: { x: 5 },
                            }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-1 text-accent"
                          >
                            <FaArrowRight className="text-sm" />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Load More / Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-16"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="inline-flex flex-col sm:flex-row gap-6 items-center bg-gradient-to-r from-primary to-teal rounded-2xl p-8 text-white"
              >
                <div className="text-center sm:text-left">
                  <h3
                    className={`text-2xl font-bold mb-2 ${montserrat.className}`}
                  >
                    Ready to Start Your Project?
                  </h3>
                  <p className={`text-white/90 ${roboto.className}`}>
                    Let's discuss how we can bring your vision to life with
                    quality and excellence.
                  </p>
                </div>
                <motion.a
                  href="https://wa.me/923209840974"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 whitespace-nowrap"
                >
                  <FaArrowRight className="text-sm" />
                  <span>Get Free Consultation</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

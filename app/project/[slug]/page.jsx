"use client";
import { motion } from "motion/react";
import projects from "@lib/projects";
import Image from "next/image";
import {
  FiArrowLeft,
  FiMapPin,
  FiCalendar,
  FiLayers,
  FiDollarSign,
} from "react-icons/fi";
import Link from "next/link";
import { useParams } from "next/navigation";
import { montserrat, poppins, roboto, playfair } from "@lib/font";
import Navbar from "@components/Navbar";
import {
  FaCheck,
  FaWhatsapp,
  FaPhone,
  FaStar,
  FaAward,
  FaShieldAlt,
} from "react-icons/fa";
import { MessageCircle, Phone } from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects?.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const whatsappLink = `https://wa.me/923209840974?text=Hello%2C%20I%20am%20interested%20in%20a%20project%20like%20${project.title}`;

  const projectStats = [
    { icon: FiCalendar, label: "Duration", value: project.duration },
    { icon: FiLayers, label: "Size", value: project.size },
    { icon: FiDollarSign, label: "Budget", value: project.budget },
  ];

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white min-h-screen"
      >
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
          {/* Background Image */}
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />

          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent z-20" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex items-end pb-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-4xl text-white"
            >
              {/* Back Button */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center text-white/90 hover:text-white transition-all duration-300 mb-8 group"
                >
                  <motion.div
                    whileHover={{ x: -5 }}
                    className="flex items-center"
                  >
                    <FiArrowLeft className="mr-3 text-lg" />
                    <span className={`${poppins.className} font-medium`}>
                      Back to Projects
                    </span>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Project Title */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${montserrat.className}`}
              >
                {project.title}
              </motion.h1>

              {/* Location */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center text-lg text-white/90 mb-8"
              >
                <FiMapPin className="mr-3 text-xl" />
                <span className={`${roboto.className}`}>
                  {project.location}
                </span>
              </motion.div>

              {/* Project Stats */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-6"
              >
                {projectStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3"
                  >
                    <stat.icon className="text-white text-lg" />
                    <div>
                      <div
                        className={`text-white text-sm ${poppins.className}`}
                      >
                        {stat.label}
                      </div>
                      <div
                        className={`text-white font-semibold ${roboto.className}`}
                      >
                        {stat.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
              {/* Left Column - Project Details */}
              <div className="lg:w-2/3 space-y-16">
                {/* Project Description */}
                <motion.section
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
                >
                  <h2
                    className={`text-3xl font-bold text-primary mb-6 ${montserrat.className}`}
                  >
                    Project Story
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-accent to-teal rounded-full mb-8" />

                  <div className="space-y-6">
                    {project.description.split("\n\n").map((paragraph, i) => (
                      <p
                        key={i}
                        className={`text-lg text-gray-700 leading-relaxed ${roboto.className}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.section>

                {/* Key Features */}
                <motion.section
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
                >
                  <h2
                    className={`text-3xl font-bold text-primary mb-6 ${montserrat.className}`}
                  >
                    Design & Features
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-accent to-teal rounded-full mb-8" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-4 group p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-accent/20 transition-all duration-300"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <span
                              className={`text-accent font-bold text-lg ${montserrat.className}`}
                            >
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        <p
                          className={`text-gray-800 font-medium leading-relaxed ${roboto.className}`}
                        >
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Additional Images */}
                {project.images.length > 1 && (
                  <motion.section
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h2
                      className={`text-3xl font-bold text-primary mb-8 ${montserrat.className}`}
                    >
                      Project Gallery
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.images.slice(1).map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: 0.5 + index * 0.1,
                          }}
                          className="relative aspect-video rounded-2xl overflow-hidden shadow-lg"
                        >
                          <Image
                            src={image}
                            alt={`${project.title} - Image ${index + 2}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                )}
              </div>

              {/* Right Column - Project Summary */}
              <div className="lg:w-1/3">
                <motion.aside
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8 sticky top-8"
                >
                  {/* Project Facts */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
                  >
                    <h3
                      className={`text-2xl font-bold text-primary mb-6 ${montserrat.className}`}
                    >
                      Project Facts
                    </h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <FiMapPin className="text-primary text-lg" />
                        </div>
                        <div>
                          <h4
                            className={`text-sm font-medium text-gray-500 ${poppins.className}`}
                          >
                            Location
                          </h4>
                          <p className={`text-gray-900 ${roboto.className}`}>
                            {project.location}
                          </p>
                        </div>
                      </div>
                      {projectStats.map((stat, index) => (
                        <div
                          key={stat.label}
                          className="flex items-start gap-4"
                        >
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <stat.icon className="text-primary text-lg" />
                          </div>
                          <div>
                            <h4
                              className={`text-sm font-medium text-gray-500 ${poppins.className}`}
                            >
                              {stat.label}
                            </h4>
                            <p className={`text-gray-900 ${roboto.className}`}>
                              {stat.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Premium Materials */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
                  >
                    <h3
                      className={`text-2xl font-bold text-primary mb-6 ${montserrat.className}`}
                    >
                      Premium Materials
                    </h3>
                    <ul className="space-y-3">
                      {project.premiumMaterials.map((material, index) => (
                        <motion.li
                          key={index}
                          initial={{ x: 20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.4 + index * 0.1,
                          }}
                          className="flex items-start gap-3"
                        >
                          <div className="bg-green-100 p-2 rounded-full mt-1">
                            <FaCheck className="text-green-600 text-sm" />
                          </div>
                          <span className={`text-gray-700 ${roboto.className}`}>
                            {material}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Challenges Overcome */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
                  >
                    <h3
                      className={`text-2xl font-bold text-primary mb-6 ${montserrat.className}`}
                    >
                      Challenges Overcome
                    </h3>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full mt-1">
                        <FaAward className="text-blue-600 text-sm" />
                      </div>
                      <p className={`text-gray-700 ${roboto.className}`}>
                        {project.challengesOvercome}
                      </p>
                    </div>
                  </motion.div>

                  {/* Call to Action */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-gradient-to-br from-primary to-teal rounded-2xl p-6 text-white text-center"
                  >
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <FaStar className="text-accent text-xl" />
                    </div>
                    <h3
                      className={`text-xl font-bold mb-3 ${montserrat.className}`}
                    >
                      Inspired by this project?
                    </h3>
                    <p className={`text-white/90 mb-6 ${roboto.className}`}>
                      Let's discuss how we can bring your vision to life with
                      the same quality and excellence.
                    </p>

                    <div className="space-y-3">
                      <motion.a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>Chat on WhatsApp</span>
                      </motion.a>

                      <motion.a
                        href="tel:+923209840974"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 border border-white/30"
                      >
                        <Phone className="w-5 h-5" />
                        <span>Call Now</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.aside>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}

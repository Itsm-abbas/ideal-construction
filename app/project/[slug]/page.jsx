// app/project/[slug]/page.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiArrowLeft,
  FiMapPin,
  FiCalendar,
  FiLayers,
  FiDollarSign,
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
// import { useParams } from "next/navigation";
import { montserrat } from "@lib/font";

export default function ProjectDetail() {
  // const { slug } = useParams();
  const project = {
    title: "Modern Luxury Villa - The Horizon Residence",
    slug: "horizon-residence",
    description: `The Horizon Residence represents our flagship project in the prestigious Hillside District, combining contemporary architecture with sustainable building practices. This 5-bedroom villa spans three levels with panoramic views of the city skyline and surrounding mountains. 
  
    Our team employed cutting-edge construction techniques including earthquake-resistant foundations and smart home automation integrated throughout the property. The open-concept living spaces feature floor-to-ceiling windows that maximize natural light while maintaining energy efficiency through specialized glazing.
    
    The project was completed on schedule despite challenging terrain conditions, thanks to our innovative engineering solutions and dedicated workforce.`,
    location: "Hillside District, Islamabad",
    duration: "14 months (March 2022 - May 2023)",
    area: "5,800 sq ft (540 sq m)",
    budget: "$1.2 million",
    images: [
      { src: "/projects/1.jpg", alt: "Project 1 Image 1" },
      { src: "/projects/9.jpg", alt: "Project 1 Image 2" },
      { src: "/projects/3.jpg", alt: "Project 1 Image 3" },
      { src: "/projects/4.jpg", alt: "Project 1 Image 3" },
      { src: "/projects/5.jpg", alt: "Project 1 Image 3" },
      { src: "/projects/7.jpg", alt: "Project 1 Image 3" },
    ],
    features: [
      "Earthquake-resistant steel frame construction",
      "Smart home automation system (Control4)",
      "Solar panel array with battery backup",
      "Infinity edge swimming pool with heating",
      "Landscaped gardens with native drought-resistant plants",
      "Home theater with Dolby Atmos sound",
      "Three-car garage with EV charging",
      "Rooftop terrace with outdoor kitchen",
    ],
    team: [
      { name: "Ar. Ahmed Khan", role: "Lead Architect" },
      { name: "Eng. Sara Malik", role: "Structural Engineer" },
      { name: "Mr. Ali Raza", role: "Project Manager" },
    ],
    materials: [
      "Imported Italian marble flooring",
      "German-engineered windows",
      "Locally sourced stone cladding",
      "American oak wood finishes",
    ],
    challenges: [
      "Steep site gradient requiring specialized foundation work",
      "Preservation of existing mature trees on property",
      "Supply chain delays for imported materials",
    ],
  };
  // Add more projects as needed

  // const project = projects.find((p) => p.slug === slug);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white "
    >
      {/* Hero Section */}

      <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        {/* Black overlay for general text readability */}
        <div className=" absolute inset-0 bg-black/10 z-10" />

        {/* NEW: Top gradient for navbar visibility */}
        <div className=" absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent z-20" />
        <Image
          src={project.images[0].src}
          alt={project.images[0].alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl"
            >
              <Link
                href="/projects"
                className="inline-flex items-center text-white/90 hover:text-white transition mb-6 "
              >
                <FiArrowLeft className="mr-2" /> View All Projects
              </Link>
              <h1
                className={`text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight ${montserrat.className}`}
              >
                {project.title}
              </h1>
              <div className="flex items-center text-lg text-white/90">
                <FiMapPin className="mr-2" />
                {project.location}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
          {/* Left Column - Project Details */}
          <div className="lg:w-2/3">
            {/* Project Description */}
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-16"
            >
              <h2
                className={`text-3xl font-bold text-gray-900 mb-6 ${montserrat.className}`}
              >
                Project Story
              </h2>
              {project.description.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg text-gray-700 mb-6 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <h2
                className={`text-3xl font-bold text-gray-900 mb-8 ${montserrat.className}`}
              >
                Design & Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start bg-gray-50 p-5 rounded-xl"
                  >
                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                      <div className="w-6 h-6 flex items-center justify-center text-green-600">
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-gray-800 font-medium">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Image Gallery */}
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-16"
            >
              <h2
                className={`text-3xl  text-gray-900 mb-8 ${montserrat.className}`}
              >
                Gallery
              </h2>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                navigation
                pagination={{ clickable: true }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-72 md:h-96 rounded-xl overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.section>

            {/* Project Team */}
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-16"
            >
              <h2
                className={`text-3xl  text-gray-900 mb-8 ${montserrat.className}`}
              >
                Project Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.team.map((member, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl font-bold mb-4">
                      {member.name.split(" ")[0].charAt(0)}
                      {member.name.split(" ")[1].charAt(0)}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - Project Summary */}
          <div className="lg:w-1/3">
            <motion.aside
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-8 sticky top-8"
            >
              {/* Project Facts */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Project Facts
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <FiMapPin className="text-gray-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Location
                      </h4>
                      <p className="text-gray-900">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiCalendar className="text-gray-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Duration
                      </h4>
                      <p className="text-gray-900">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiLayers className="text-gray-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Area
                      </h4>
                      <p className="text-gray-900">{project.area}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiDollarSign className="text-gray-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Budget
                      </h4>
                      <p className="text-gray-900">{project.budget}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Materials */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Premium Materials
                </h3>
                <ul className="space-y-3">
                  {project.materials.map((material, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-gray-700">{material}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges Overcome */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Challenges Overcome
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        !
                      </span>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action */}
              <div className="bg-gray-900 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Inspired by this project?
                </h3>
                <p className="text-gray-300 mb-6">
                  Let&apos;s discuss how we can bring your vision to life
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

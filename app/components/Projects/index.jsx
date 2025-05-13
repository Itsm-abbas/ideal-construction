// components/OurProjects.tsx
"use client";

import { motion } from "motion/react";
import projects from "@lib/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { montserrat } from "@lib/font";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

export default function OurProjects() {
  const swiperRef = useRef(null);

  // Pause on hover, resume on hover out
  const handleMouseEnter = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <section id="projects" className="py-20 mb-12 md:mb-32 md:px-20">
      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title title={"Our Projects"} shadow={true} gradient={true} />
        <Subtitle subtitle={"Crafted with Ihsan, Designed for Life."} />
      </motion.div>

      {/* Project Slider */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation
          className="px-4"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <Link href={`/project/${project.slug}`}>
                <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-[270px]">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

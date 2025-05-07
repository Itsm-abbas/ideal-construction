// components/OurProjects.tsx
"use client";

import { motion } from "framer-motion";
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

const projects = [
  {
    title: "Modern 10 Marla House",
    slug: "modern-10-marla",
    image: "/projects/1.jpg",
    description:
      "Islamabad-based residential project with premium materials & elegant front elevation.",
  },
  {
    title: "7 Marla Smart Home",
    slug: "smart-7-marla",
    image: "/projects/2.jpg",
    description:
      "Smart living with efficient design, tech-enabled spaces & shariah-compliant planning.",
  },
  {
    title: "Renovation Project – F-11",
    slug: "renovation-f11",
    image: "/projects/3.jpg",
    description:
      "Complete remodeling with material verification and transparency in costing.",
  },
  {
    title: "Renovation Project – F-11",
    slug: "renovation-f11",
    image: "/projects/4.jpg",
    description:
      "Complete remodeling with material verification and transparency in costing.",
  },
  {
    title: "Renovation Project – F-11",
    slug: "renovation-f11",
    image: "/projects/5.jpg",
    description:
      "Complete remodeling with material verification and transparency in costing.",
  },
  {
    title: "Renovation Project – F-11",
    slug: "renovation-f11",
    image: "/projects/6.png",
    description:
      "Complete remodeling with material verification and transparency in costing.",
  },
  {
    title: "Renovation Project – F-11",
    slug: "renovation-f11",
    image: "/projects/7.jpg",
    description:
      "Complete remodeling with material verification and transparency in costing.",
  },
  {
    title: "Renovation Project – F-11",
    slug: "renovation-f11",
    image: "/projects/8.jpg",
    description:
      "Complete remodeling with material verification and transparency in costing.",
  },
  {
    title: "Renovation Project – F-11",
    slug: "renovation-f11",
    image: "/projects/9.jpg",
    description:
      "Complete remodeling with material verification and transparency in costing.",
  },
];

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
    <section className="py-20 " id="projects">
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
              slidesPerView: 3.5,
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
              <Link href={`/projects/${project.slug}`}>
                <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-[400px]">
                  {/* Static Image */}
                  <Image
                    src={project.image}
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

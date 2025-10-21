"use client";

import { motion } from "motion/react";
import projects from "@lib/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import Link from "next/link";
import { montserrat, poppins, roboto, playfair } from "@lib/font";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";
import { useRef } from "react";
import { FaArrowRight, FaExpand, FaMapMarkerAlt } from "react-icons/fa";

export default function OurProjects() {
  const swiperRef = useRef(null);

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
    <section
      id="projects"
      className="relative bg-gradient-to-b from-white to-mint/20 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className={`text-sm font-medium ${poppins.className}`}>
              Our Portfolio
            </span>
          </div>

          <Title title={"Our Projects"} shadow={true} gradient={true} />
          <Subtitle subtitle={"Crafted with Ihsan, Designed for Life."} />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed ${roboto.className}`}
          >
            Discover our portfolio of exceptional construction projects, each
            built with Islamic values, quality craftsmanship, and client
            satisfaction at heart.
          </motion.p>
        </motion.div>

        {/* Project Slider */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            effect="coverflow"
            grabCursor={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              renderBullet: function (index, className) {
                return `<span class="${className} bg-accent hover:bg-accent/80 transition-colors duration-300"></span>`;
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="pb-16"
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <Link href={`/project/${project.slug}`}>
                  <motion.div
                    className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer h-[380px] lg:h-[420px]"
                    whileHover="hover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    {/* Project Image */}
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                      {/* Top Badge */}
                      <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium z-10">
                        {project.category || "Construction"}
                      </div>

                      {/* View Icon */}
                      <motion.div
                        className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaExpand size={14} />
                      </motion.div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500">
                      {/* Location */}
                      {project.location && (
                        <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                          <FaMapMarkerAlt size={12} />
                          <span className={roboto.className}>
                            {project.location}
                          </span>
                        </div>
                      )}

                      {/* Title */}
                      <motion.h3
                        className={`text-xl lg:text-2xl font-bold mb-3 ${montserrat.className} group-hover:text-accent transition-colors duration-300`}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Description */}
                      <p
                        className={`text-gray-200 text-sm leading-relaxed mb-4 line-clamp-2 ${roboto.className}`}
                      >
                        {project.description}
                      </p>

                      {/* CTA Button */}
                      <motion.div
                        className="flex items-center gap-2 text-accent font-semibold text-sm group/btn"
                        whileHover="hover"
                      >
                        <span>View Project</span>
                        <motion.span
                          variants={{
                            hover: { x: 5 },
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaArrowRight size={12} />
                        </motion.span>
                      </motion.div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !text-accent !w-12 !h-12 !rounded-full !bg-white !shadow-lg hover:!bg-accent hover:!text-white transition-all duration-300 after:!text-lg"></div>
          <div className="swiper-button-next !text-accent !w-12 !h-12 !rounded-full !bg-white !shadow-lg hover:!bg-accent hover:!text-white transition-all duration-300 after:!text-lg"></div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              href="/projects"
              className={`inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group ${poppins.className}`}
            >
              <span>View All Projects</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight className="text-sm" />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
        .swiper-button-prev,
        .swiper-button-next {
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}

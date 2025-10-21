"use client";
import { motion } from "motion/react";
import { poppins, playfair, montserrat } from "@lib/font";
import Title from "@components/Title";
import services from "@lib/services.json";
import Subtitle from "@components/Subtitle";
import Link from "next/link";
import {
  FaArrowRight,
  FaHammer,
  FaHome,
  FaBuilding,
  FaTools,
  FaHardHat,
  FaPaintRoller,
} from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";

// Icon mapping for services
const serviceIcons = {
  construction: FaHammer,
  residential: FaHome,
  commercial: FaBuilding,
  renovation: FaTools,
  foundation: FaHardHat,
  finishing: FaPaintRoller,
};

export default function ServicesSection() {
  const containerRef = useRef(null);

  const getServiceIcon = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("residential")) return FaHome;
    if (lowerTitle.includes("commercial")) return FaBuilding;
    if (lowerTitle.includes("renovation")) return FaTools;
    if (lowerTitle.includes("foundation")) return FaHardHat;
    if (lowerTitle.includes("finishing")) return FaPaintRoller;
    return FaHammer;
  };

  return (
    <section
      className="relative bg-gradient-to-b from-white to-mint/30 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="services"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className={`text-sm font-medium ${poppins.className}`}>
              What We Offer
            </span>
          </div>

          <Title title={"Our Services"} shadow={true} gradient={true} />

          <Subtitle
            subtitle={
              "Our services are more than construction — they are acts of trust and responsibility."
            }
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed ${playfair.className} italic`}
          >
            Every project is built with Ihsan (excellence), integrity, and
            Islamic values at the core of our craftsmanship.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = getServiceIcon(service.title);

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: "-50px 0px -100px 0px",
                  root: containerRef,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <Link href={`/service/${service.slug}`} passHref>
                  <motion.div
                    className="group relative h-full bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/80 hover:border-accent/20 overflow-hidden"
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

                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        src={service.image}
                        alt={service.title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Service Icon */}
                      <motion.div
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent className="text-accent text-lg" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6 flex flex-col h-[calc(100%-12rem)]">
                      {/* Title & Description */}
                      <div className="flex-1">
                        <motion.h3
                          className={`text-xl font-bold text-primary mb-3 ${montserrat.className} group-hover:text-primary/90 transition-colors duration-300`}
                        >
                          {service.title}
                        </motion.h3>

                        <motion.p
                          className={`text-gray-600 leading-relaxed mb-4 line-clamp-3 font-body`}
                        >
                          {service.description}
                        </motion.p>
                      </div>

                      {/* Faith Note */}
                      <motion.div className="mt-4 pt-4 border-t border-gray-200/60 group-hover:border-accent/30 transition-colors duration-500">
                        <span
                          className={`text-sm text-teal font-medium italic leading-relaxed font-quote`}
                        >
                          {service.faithNote}
                        </span>
                      </motion.div>

                      {/* CTA Button */}
                      <motion.div
                        className="mt-6 flex items-center justify-between pt-4 border-t border-gray-200/30 group-hover:border-accent/20 transition-colors duration-300"
                        whileHover="hover"
                      >
                        <span
                          className={`text-accent font-semibold text-sm uppercase tracking-wide group-hover:text-accent/80 transition-colors duration-300 ${poppins.className}`}
                        >
                          Read More
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
            );
          })}
        </div>

        {/* Bottom CTA */}
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
          >
            <Link
              href="/services"
              className={`inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group ${poppins.className}`}
            >
              <span>View All Services</span>
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
    </section>
  );
}

"use client";
import { motion } from "motion/react";

import { poppins } from "@lib/font";
import Title from "@components/Title";
import services from "@lib/services.json";
import Subtitle from "@components/Subtitle";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section
      className="bg-gradient-to-b from-white to-[#f8fafc] py-12 px-6 sm:px-10"
      id="services"
    >
      <div className="max-w-6xl mx-auto text-center">
        <Title title={"Our Services"} shadow={true} gradient={true} />
        <Subtitle
          subtitle={
            "Our services are more than construction — they are acts of trust and responsibility."
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 md:py-24 px-4 sm:px-6">
          {services.map((service, index) => (
            <Link href={`/service/${service.slug}`} passHref key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px 0px -100px 0px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group  border border-gray-100/70 bg-white rounded-xl shadow-xs hover:shadow-lg transition-all duration-500 hover:border-transparent relative h-full flex flex-col"
              >
                {/* Subtle background effect on hover */}
                <div className="  absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative z-10 flex-1 flex flex-col ">
                  <Image
                    width={150}
                    height={200}
                    className="w-full"
                    src={service.image}
                    alt={service.title}
                  />

                  {/* Title container with proper spacing */}
                  <div className="p-6 flex flex-col items-center justify-start flex-1 gap-4">
                    <div className="">
                      <h3
                        className={`text-lg text-[var(--color-primary1)] leading-tight ${poppins.className} `}
                      >
                        {service.title}
                      </h3>
                      {/* Underline that appears on hover */}
                      <div className="w-0 h-1 bg-[var(--color-primary2)] opacity-70 group-hover:w-full transition-all duration-500 mt-2"></div>
                    </div>
                    {/* Description with better readability */}
                    <p className="text-gray-600  mb-5 flex-1 ">
                      {service.description}
                    </p>
                    {/* Faith note with decorative border */}
                    <div className="mt-auto  border-t w-full border-gray-200/60 group-hover:border-[#157a6e]/30 transition-colors duration-500">
                      <span className="block text-sm text-[var(--color-primary2)] font-medium italic">
                        {service.faithNote}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 justify-end text-sm text-[var(--color-accent)] hover:opacity-80 font-medium mt-auto pt-4 border-t border-gray-200 /30 transition-colors duration-300 uppercase w-full">
                      Read More
                      <span>
                        <FaArrowRight className="w-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

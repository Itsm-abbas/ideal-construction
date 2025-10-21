"use client";

import servicesData from "@lib/services.json";
import {
  Home,
  Building2,
  Layout,
  RefreshCcw,
  Handshake,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@components/Navbar";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";
import Image from "next/image";
import MotionWrapper from "@components/MotionWrapper";
import { poppins, montserrat, roboto, playfair } from "@lib/font";
import { FaArrowRight, FaWhatsapp, FaClock, FaAward } from "react-icons/fa";
import { motion } from "motion/react";

// Icon component mapping
const iconComponents = {
  Home,
  Building2,
  Layout,
  RefreshCcw,
  Handshake,
};

const whatsappLink = `https://wa.me/923209840974?text=Hello%2C%20I%20want%20a%20quote%20for%20construction%20work`;

export default function ServicesPage() {
  const features = [
    { icon: FaAward, text: "Quality Certified", color: "text-accent" },
    { icon: FaClock, text: "On-Time Delivery", color: "text-teal" },
    { icon: FaWhatsapp, text: "24/7 Support", color: "text-green-500" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-mint/20 pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className={`text-sm font-medium ${poppins.className}`}>
                  Our Expertise
                </span>
              </div>

              <Title title="Our Services" shadow={true} gradient={true} />

              <Subtitle subtitle="Comprehensive construction solutions built on Islamic values of excellence, trust, and sincerity." />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed ${roboto.className}`}
              >
                From residential homes to commercial complexes, we deliver
                exceptional quality with the principles of Ihsan (excellence)
                and Amanah (trust) at our core.
              </motion.p>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-6 mt-8"
              >
                {features.map((feature, idx) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-lg px-4 py-3 shadow-sm"
                  >
                    <feature.icon className={`text-lg ${feature.color}`} />
                    <span
                      className={`text-gray-700 text-sm font-medium ${poppins.className}`}
                    >
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
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

                        {/* Service Category Badge */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                          <span
                            className={`text-xs font-semibold text-primary ${poppins.className}`}
                          >
                            {service.category || "Construction"}
                          </span>
                        </div>
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
                            className={`text-gray-600 leading-relaxed mb-4 line-clamp-3 ${roboto.className}`}
                          >
                            {service.description}
                          </motion.p>
                        </div>

                        {/* Faith Note */}
                        <motion.div className="mt-4 pt-4 border-t border-gray-200/60 group-hover:border-accent/30 transition-colors duration-500">
                          <span
                            className={`text-sm text-teal font-medium italic leading-relaxed ${playfair.className}`}
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
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-gradient-to-br from-primary to-teal rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10 text-center text-white p-12 lg:p-16">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`text-3xl lg:text-4xl font-bold mb-4 ${montserrat.className}`}
                >
                  Ready to Start Your Project?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed ${roboto.className}`}
                >
                  Let's discuss how we can bring your vision to life with
                  quality, transparency, and Islamic values at the core.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Get Free Consultation</span>
                  </motion.a>

                  <motion.a
                    href="tel:+923209840974"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </motion.a>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`text-white/70 text-sm mt-6 ${roboto.className}`}
                >
                  📞 Available 24/7 for your construction needs
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
